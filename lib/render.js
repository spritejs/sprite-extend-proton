'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _spritejs = require('spritejs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setCloudPartice(idx, cloud, particle) {
  cloud.setTransform(idx, null);
  cloud.setColorTransform(idx, null);
  if (particle.color) {
    var _particle$rgb = particle.rgb,
        r = _particle$rgb.r,
        g = _particle$rgb.g,
        b = _particle$rgb.b;

    cloud.setFillColor(idx, [r, g, b, 1]);
  }
  cloud.setOpacity(idx, particle.alpha);
  cloud.translate(idx, [particle.p.x, particle.p.y]);

  var scale = particle.scale;
  var bodyRadius = particle.body.attributes.radius;
  if (particle.radius && bodyRadius) {
    scale *= particle.radius / bodyRadius;
  }
  cloud.scale(idx, [scale, scale]);
  cloud.rotate(idx, particle.rotation);
}

var Render = function (_CustomRenderer) {
  (0, _inherits3.default)(Render, _CustomRenderer);

  function Render(element) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, Render);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, element));

    _this.attrs = attrs;
    _this.name = 'SpriteRender';
    return _this;
  }

  (0, _createClass3.default)(Render, [{
    key: 'resize',
    value: function resize(width, height) {
      (0, _get3.default)(Render.prototype.__proto__ || (0, _getPrototypeOf2.default)(Render.prototype), 'resize', this).call(this, width, height);
      if (this.element.parent && this.element.parent.setResolution) {
        this.element.parent.setResolution(width, height);
      }
    }
  }, {
    key: 'onProtonUpdate',
    value: function onProtonUpdate() {
      this.element.render();
    }
  }, {
    key: 'onParticleCreated',
    value: function onParticleCreated(particle) {
      if (!particle.body) {
        var _node = new _spritejs.Arc({ radius: 100 });
        particle.body = _node;
      }

      var node = particle.body;
      if (!this.cloud) {
        this.cloud = new _spritejs.Cloud(node);
        this._particles = [];
        this.element.append(this.cloud);
      } else {
        this.cloud.amount++;
      }
      var idx = this.cloud.amount - 1;
      // particle.idx = idx;
      setCloudPartice(idx, this.cloud, particle);
      this._particles.push(particle);
    }
  }, {
    key: 'onParticleUpdate',
    value: function onParticleUpdate(particle) {
      var idx = this._particles.indexOf(particle);
      setCloudPartice(idx, this.cloud, particle);
    }
  }, {
    key: 'onParticleDead',
    value: function onParticleDead(particle) {
      var idx = this._particles.indexOf(particle);
      this._particles.splice(idx, 1);
      this.cloud.delete(idx);
    }
  }]);
  return Render;
}(_protonJs.CustomRenderer);

exports.default = Render;