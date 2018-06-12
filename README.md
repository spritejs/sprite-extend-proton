# sprite-extend-proton

This is a spritejs extension for [proton-js](https://github.com/a-jie/Proton).

```html
<script src="https://s4.ssl.qhres.com/!c35a4027/sprite-extend-proton.js"></script>
```

## Quick Start

```html
<div id="container"></div>
<script src="/js/proton.js"></script>
<script src="https://s4.ssl.qhres.com/!ee69cc07/spritejs.min.js"></script>
<script src="https://s4.ssl.qhres.com/!c35a4027/sprite-extend-proton.js"></script>
<script>
    const {Scene, ProtonRenderer} = spritejs
    const scene = new Scene('#container', {
      viewport: [600, 600],
      resolution: [600, 600],
    })
    const layer = scene.layer('fglayer')

    const proton = new Proton()
    const emitter = new Proton.Emitter()

    // set Rate
    emitter.rate = new Proton.Rate(Proton.getSpan(10, 20), 0.1)

    // add Initialize
    emitter.addInitialize(new Proton.Radius(1, 12))
    emitter.addInitialize(new Proton.Life(2, 4))
    emitter.addInitialize(new Proton.Velocity(3, Proton.getSpan(0, 360), 'polar'))

    // add Behaviour
    emitter.addBehaviour(new Proton.Color('ff0000', 'random'))
    emitter.addBehaviour(new Proton.Alpha(1, 0))

    // set emitter position
    emitter.p.x = layer.canvas.width / 2
    emitter.p.y = layer.canvas.height / 2
    emitter.emit(5)

    // add emitter to the proton
    proton.addEmitter(emitter)

    // add canvas renderer
    const renderer = new ProtonRenderer(layer)
    proton.addRenderer(renderer)

    // use Euler integration calculation is more accurate (default false)
    Proton.USE_CLOCK = false
    // proton.update()
    function tick() {
      requestAnimationFrame(tick)
      proton.update()
    }
    tick()
</script>
```