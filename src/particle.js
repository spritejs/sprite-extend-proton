import {Sprite, registerNodeType} from 'sprite-core'
import {parseColorString} from 'sprite-utils'

class Particle extends Sprite {
  get contentSize() {
    if(this.textures.length) {
      return super.contentSize
    }
    const d = this.attr('r') * 2
    return [d, d]
  }
  pointCollision(evt) {
    if(super.pointCollision(evt)) {
      const r = this.attr('r')
      const [x0, y0] = this.originalRect,
        [cx, cy] = [x0 + r, y0 + r]
      const {offsetX: x, offsetY: y} = evt

      return (x - cx) ** 2 + (y - cy) ** 2 <= r ** 2
    }
    return false
  }
  draw(t, drawingContext = this.context) {
    const [x, y] = this.attr('pos')
    drawingContext.save()
    drawingContext.translate(x, y)
    drawingContext.transform(...this.transform.m)
    drawingContext.globalAlpha *= this.attr('opacity')
    const [ox, oy] = this.originalRect
    drawingContext.translate(ox, oy)
    this.render(t, drawingContext)
    drawingContext.restore()
  }
  render(t, drawingContext) {
    const textures = this.textures
    if(textures.length) {
      if(this.images) {
        textures.forEach((texture, i) => {
          const img = this.images[i]
          const rect = texture.rect || [0, 0, ...this.innerSize]
          const srcRect = texture.srcRect

          if(srcRect) {
            drawingContext.drawImage(img, ...srcRect, ...rect)
          } else {
            drawingContext.drawImage(img, ...rect)
          }
        })
      }
    } else {
      const color = this.attr('color')
      drawingContext.fillStyle = color

      const r = this.attr('r'),
        stroke = this.attr('stroke')

      // draw circle
      drawingContext.beginPath()
      drawingContext.arc(r, r, r, 0, Math.PI * 2, true)

      if(stroke) {
        drawingContext.strokeStyle = this.stroke.color
        drawingContext.lineWidth = this.stroke.thinkness
        drawingContext.stroke()
      }

      drawingContext.closePath()
      drawingContext.fill()
    }

    return drawingContext
  }
}

Particle.defineAttributes({
  init(attr) {
    attr.setDefault({
      r: 0,
      color: parseColorString('red'),
      stroke: null,
    })
  },
  color(attr, val) {
    attr.clearCache()
    attr.set('color', parseColorString(val))
  },
  stroke(attr, val) {
    attr.clearCache()
    attr.set('stroke', val)
  },
  r(attr, val) {
    attr.clearCache()
    attr.set('r', val)
  },
})

registerNodeType('proton', Particle)
export default Particle
