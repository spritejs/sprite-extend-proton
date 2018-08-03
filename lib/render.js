'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _protonJs = require('proton-js');

var _particle = require('./particle');

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (_CustomRenderer) {
  (0, _inherits3.default)(_default, _CustomRenderer);

  function _default(element) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this, element));

    _this.attrs = attrs;
    _this.name = 'SpriteRender';
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: 'resize',
    value: function resize(width, height) {
      (0, _get3.default)(_default.prototype.__proto__ || (0, _getPrototypeOf2.default)(_default.prototype), 'resize', this).call(this, width, height);
      if (this.element.parent && this.element.parent.resolution) {
        this.element.parent.resolution = [width, height];
      }
    }
  }, {
    key: 'onProtonUpdate',
    value: function onProtonUpdate() {
      this.element.draw();
    }
  }, {
    key: 'createParticle',
    value: function createParticle(particle) {
      var s = new _particle2.default();
      if (particle.body) {
        s.textures = particle.body;
      } else {
        var r = particle.radius;
        s.attr({
          r: r
        });
      }

      if (particle.color) {
        s.attr({ color: particle.color });
      }

      s.attr((0, _assign2.default)(this.attrs, {
        name: 'proton-particles',
        anchor: 0.5,
        pos: [particle.p.x, particle.p.y],
        opacity: particle.alpha,
        scale: [particle.scale, particle.scale],
        rotate: particle.rotation
      }));
      return s;
    }
  }, {
    key: 'onParticleCreated',
    value: function onParticleCreated(particle) {
      var s = this.createParticle(particle);
      particle.body = s;
      this.element.append(s);
    }
  }, {
    key: 'onParticleUpdate',
    value: function onParticleUpdate(particle) {
      var s = particle.body;

      if (particle.transform.rgb && s.textures.length === 0) {
        var _particle$transform$r = particle.transform.rgb,
            r = _particle$transform$r.r,
            g = _particle$transform$r.g,
            b = _particle$transform$r.b;

        var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
        s.attr({ color: color });
      }
      s.attr({
        opacity: particle.alpha,
        pos: [particle.p.x, particle.p.y],
        scale: [particle.scale, particle.scale],
        rotate: particle.rotation
      });
    }
  }, {
    key: 'onParticleDead',
    value: function onParticleDead(particle) {
      var s = particle.body;
      this.element.remove(s);
      particle.body = null;
    }
  }]);
  return _default;
}(_protonJs.CustomRenderer);

exports.default = _default;