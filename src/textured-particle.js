import {Sprite} from 'sprite-core'
import {parseColorString} from 'sprite-utils'

class TexturedParticle extends Sprite {
  constructor(attr) {
    super(attr)
    this.__cachePolicyThreshold = Infinity
  }
  render(t, drawingContext) {
    const color = this.attr('color')
    if(color) {
      drawingContext.fillStyle = color
      const rect = [0, 0, ...this.clientSize]
      drawingContext.fillRect(...rect)
    }

    const textures = this.textures
    if(this.images) {
      drawingContext.save()
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
