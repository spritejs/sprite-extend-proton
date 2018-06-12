'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_CustomRenderer) {
  (0, _inherits3.default)(_class, _CustomRenderer);

  function _class(element) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, element));

    _this.name = 'SpriteRender';
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'resize',
    value: function resize(width, height) {
      (0, _get3.default)(_class.prototype.__proto__ || (0, _getPrototypeOf2.default)(_class.prototype), 'resize', this).call(this, width, height);
      if (this.element.parent && this.element.parent.resolution) {
        this.element.parent.resolution = [width, height];
      }
    }
  }, {
    key: 'createParticle',
    value: function createParticle(particle) {
      var s = new _spriteCore.Sprite();
      if (particle.body) {
        s.textures = particle.body;
      } else {
        var r = particle.radius;
        s.attr({
          bgcolor: particle.color || '#FF0000',
          size: [r * 2, r * 2],
          borderRadius: r
        });
      }
      s.attr({
        name: 'proton-particles',
        anchor: 0.5,
        pos: [particle.p.x, particle.p.y],
        opacity: particle.alpha,
        scale: [particle.scale, particle.scale],
        rotate: particle.rotation
      });
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

      if (particle.transform.rgb && !s.textures.length) {
        var _particle$transform$r = particle.transform.rgb,
            r = _particle$transform$r.r,
            g = _particle$transform$r.g,
            b = _particle$transform$r.b;

        var bgcolor = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + particle.alpha + ')';
        s.attr({ bgcolor: bgcolor });
      } else {
        s.attr({ opacity: particle.alpha });
      }
      s.attr({
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
  return _class;
}(_protonJs.CustomRenderer);

exports.default = _class;