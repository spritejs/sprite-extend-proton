import {CustomRenderer} from 'proton-js';
import {Arc, Cloud} from 'spritejs';

function setCloudPartice(cloud, particle) {
  const idx = particle.idx;
  cloud.setTransform(idx, null);
  cloud.setColorTransform(idx, null);
  if(particle.color) {
    const {r, g, b} = particle.rgb;
    cloud.setFillColor(idx, [r, g, b, 1]);
  }
  cloud.opacity(idx, particle.alpha);
  cloud.translate(idx, [particle.p.x, particle.p.y]);

  let scale = particle.scale;
  const bodyRadius = particle.body.attributes.radius;
  if(particle.radius && bodyRadius) {
    scale *= particle.radius / bodyRadius;
  }
  cloud.scale(idx, [scale, scale], [particle.p.x, particle.p.y]);
  cloud.rotate(idx, particle.rotation, [particle.p.x, particle.p.y]);
}

export default class Render extends CustomRenderer {
  constructor(element, attrs = {}) {
    super(element);
    this.attrs = attrs;
    this.name = 'SpriteRender';
  }

  resize(width, height) {
    super.resize(width, height);
    if(this.element.parent && this.element.parent.setResolution) {
      this.element.parent.setResolution(width, height);
    }
  }

  onProtonUpdate() {
    this.element.render();
  }

  onParticleCreated(particle) {
    if(!particle.body) {
      const node = new Arc({radius: 100});
      particle.body = node;
    }

    const node = particle.body;
    if(!this.cloud) {
      this.cloud = new Cloud(node);
      this._particles = [];
      this.element.append(this.cloud);
    } else {
      this.cloud.amount++;
    }
    const idx = this.cloud.amount - 1;
    particle.idx = idx;
    setCloudPartice(this.cloud, particle);
    this._particles.push(particle);
  }

  onParticleUpdate(particle) {
    setCloudPartice(this.cloud, particle);
  }

  onParticleDead(particle) {
    const idx = particle.idx;
    const particles = this._particles;
    for(let i = idx + 1; i < particles.length; i++) {
      const p = particles[i];
      p.idx--;
      particles[i - 1] = p;
    }
    particles.pop();
    this.cloud.delete(idx);
  }
}