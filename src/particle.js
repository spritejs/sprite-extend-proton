import {BaseSprite} from 'sprite-core'
import {parseColorString} from 'sprite-utils'

class Particle extends BaseSprite {
  get contentSize() {
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
  render(t, drawingContext) {
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

    const textures = this.textures
    if(this.images) {
      drawingContext.save()
      drawingContext.globalCompositeOperation = 'source-over'
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
      drawingContext.restore()
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

export default Particle
