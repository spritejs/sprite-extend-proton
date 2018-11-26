'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// auto use
if (typeof window !== 'undefined' && window.spritejs) {
  window.spritejs.use(install);
} // for webpack build
function install(spritejs) {
  var ret = { ProtonRenderer: spritejs.use(_render2.default, null, false) };
  return ret;
}