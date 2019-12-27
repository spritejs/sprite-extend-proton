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

var _spritejs = require('spritejs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setCloudPartice(cloud, particle) {
  var idx = particle.idx;
  cloud.setTransform(idx, null);
  cloud.setColorTransform(idx, null);
  if (particle.rgb) {
    var _particle$rgb = particle.rgb,
        r = _particle$rgb.r,
        g = _particle$rgb.g,
        b = _particle$rgb.b;

    cloud.setFillColor(idx, [r, g, b, 1]);
  }
  cloud.opacity(idx, particle.alpha);
  cloud.translate(idx, [particle.p.x, particle.p.y]);
  cloud.scale(idx, [particle.scale, particle.scale], [particle.p.x, particle.p.y]);
  cloud.rotate(idx, particle.rotation, [particle.p.x, particle.p.y]);
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
      // console.log(this.element.children.length);
      this.element.render();
    }
  }, {
    key: 'createParticle',
    value: function createParticle(particle) {
      var node = new _spritejs.Sprite();
      var radius = particle.radius;
      node.attributes.width = radius * 2;
      node.attributes.height = radius * 2;
      node.attributes.borderRadius = radius;

      if (particle.rgb) {
        var _particle$rgb2 = particle.rgb,
            r = _particle$rgb2.r,
            g = _particle$rgb2.g,
            b = _particle$rgb2.b;

        node.attributes.bgcolor = [r, g, b, particle.alpha];
      }

      if (particle.alpha) {
        node.attributes.opacity = particle.alpha;
      }

      node.attr((0, _assign2.default)(this.attrs, {
        id: particle.id,
        name: particle.name,
        anchor: 0.5,
        pos: [particle.p.x, particle.p.y],
        scale: [particle.scale, particle.scale],
        rotate: particle.rotation
      }));

      return node;
    }
  }, {
    key: 'onParticleCreated',
    value: function onParticleCreated(particle) {
      if (!particle.body) {
        var node = this.createParticle(particle);
        particle.body = node;
        this.element.append(node);
      } else {
        var _node = particle.body;
        if (!this.cloud) {
          this.cloud = new _spritejs.Cloud(_node);
          this._particles = [];
          this.element.append(this.cloud);
        } else {
          this.cloud.amount++;
        }
        var idx = this.cloud.amount - 1;
        particle.idx = idx;
        setCloudPartice(this.cloud, particle);
        this._particles.push(particle);
      }
    }
  }, {
    key: 'onParticleUpdate',
    value: function onParticleUpdate(particle) {
      if (!this.cloud) {
        var node = particle.body;

        if (particle.rgb) {
          var _particle$rgb3 = particle.rgb,
              r = _particle$rgb3.r,
              g = _particle$rgb3.g,
              b = _particle$rgb3.b;

          node.attributes.bgcolor = [r, g, b, particle.alpha];
        }

        node.attr({
          pos: [particle.p.x, particle.p.y],
          scale: [particle.scale, particle.scale],
          rotate: particle.rotation
        });
      } else {
        setCloudPartice(this.cloud, particle);
      }
    }
  }, {
    key: 'onParticleDead',
    value: function onParticleDead(particle) {
      if (!this.cloud) {
        var node = particle.body;
        node.remove();
        particle.body = null;
      } else {
        var idx = particle.idx;
        var particles = this._particles;
        for (var i = idx + 1; i < particles.length; i++) {
          var p = particles[i];
          p.idx--;
          particles[i - 1] = p;
        }
        particles.pop();
        this.cloud.delete(idx);
      }
    }
  }]);
  return Render;
}(_protonJs.CustomRenderer);

exports.default = Render;