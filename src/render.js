import {CustomRenderer} from 'proton-js'
import {Sprite} from 'sprite-core'

export default class extends CustomRenderer {
  constructor(element) {
    super(element)
    this.name = 'SpriteRender'
  }
  resize(width, height) {
    super.resize(width, height)
    if(this.element.parent && this.element.parent.resolution) {
      this.element.parent.resolution = [width, height]
    }
  }
  createParticle(particle) {
    const s = new Sprite()
    if(particle.body) {
      s.textures = particle.body
    } else {
      const r = particle.radius
      s.attr({
        bgcolor: particle.color || '#FF0000',
        size: [r * 2, r * 2],
        borderRadius: r,
      })
    }
    s.attr({
      name: 'proton-particles',
      anchor: 0.5,
      pos: [particle.p.x, particle.p.y],
      opacity: particle.alpha,
      scale: [particle.scale, particle.scale],
      rotate: particle.rotation,
    })
    return s
  }
  onParticleCreated(particle) {
    const s = this.createParticle(particle)
    particle.body = s
    this.element.append(s)
  }
  onParticleUpdate(particle) {
    const s = particle.body

    if(particle.transform.rgb && (!s.textures.length)) {
      const {r, g, b} = particle.transform.rgb
      const bgcolor = `rgba(${r}, ${g}, ${b}, ${particle.alpha})`
      s.attr({bgcolor})
    } else {
      s.attr({opacity: particle.alpha})
    }
    s.attr({
      pos: [particle.p.x, particle.p.y],
      scale: [particle.scale, particle.scale],
      rotate: particle.rotation,
    })
  }
  onParticleDead(particle) {
    const s = particle.body
    this.element.remove(s)
    particle.body = null
  }
}
