// for webpack build
import RendererPlugin from './render'

// auto use
if(typeof window !== 'undefined' && window.spritejs) {
  window.spritejs.use(install)
}

export default function install(spritejs) {
  const ret = {ProtonRenderer: spritejs.use(RendererPlugin, null, false)}
  return ret
}
