import {CustomRenderer} from 'proton-js'
import Particle from './particle'

export default class extends CustomRenderer {
  constructor(element, attrs = {}) {
    super(element)
    this.attrs = attrs
    this.name = 'SpriteRender'
  }
  resize(width, height) {
    super.resize(width, height)
    if(this.element.parent && this.element.parent.resolution) {
      this.element.parent.resolution = [width, height]
    }
  }
  onProtonUpdate() {
    this.element.draw()
  }
  createParticle(particle) {
    const s = new Particle()
    if(particle.body) {
      s.textures = particle.body
    } else {
      const r = particle.radius
      s.attr({
        r,
      })
    }

    if(particle.color) {
      s.attr({color: particle.color})
    }

    s.attr(Object.assign(this.attrs, {
      name: 'proton-particles',
      anchor: 0.5,
      pos: [particle.p.x, particle.p.y],
      opacity: particle.alpha,
      scale: [particle.scale, particle.scale],
      rotate: particle.rotation,
    }))
    return s
  }
  onParticleCreated(particle) {
    const s = this.createParticle(particle)
    particle.body = s
    this.element.append(s)
  }
  onParticleUpdate(particle) {
    const s = particle.body

    if(particle.transform.rgb && s.textures.length === 0) {
      const {r, g, b} = particle.transform.rgb
      const color = `rgb(${r}, ${g}, ${b})`
      s.attr({color})
    }
    s.attr({
      opacity: particle.alpha,
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
