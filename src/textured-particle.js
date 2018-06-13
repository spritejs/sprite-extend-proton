import {Sprite} from 'sprite-core'
import {parseColorString} from 'sprite-utils'

class TexturedParticle extends Sprite {
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

    return drawingContext
  }
}

TexturedParticle.defineAttributes({
  init(attr) {
    attr.setDefault({
      color: null,
    })
  },
  color(attr, val) {
    attr.clearCache()
    attr.set('color', parseColorString(val))
  },
})

export default TexturedParticle
