'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

exports.default = install;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _applyDecoratedDescriptor = require('babel-decorators-runtime');

function install(_ref) {
  var _desc, _value, _class;

  var use = _ref.use,
      Sprite = _ref.Sprite,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var parseColorString = utils.parseColorString,
      flow = utils.flow;
  var Particle = (_class = function (_Sprite) {
    (0, _inherits3.default)(Particle, _Sprite);

    function Particle() {
      (0, _classCallCheck3.default)(this, Particle);
      return (0, _possibleConstructorReturn3.default)(this, (Particle.__proto__ || (0, _getPrototypeOf2.default)(Particle)).apply(this, arguments));
    }

    (0, _createClass3.default)(Particle, [{
      key: 'pointCollision',
      value: function pointCollision(evt) {
        if ((0, _get3.default)(Particle.prototype.__proto__ || (0, _getPrototypeOf2.default)(Particle.prototype), 'pointCollision', this).call(this, evt)) {
          var r = this.attr('r');

          var _originalRect = (0, _slicedToArray3.default)(this.originalRect, 2),
              x0 = _originalRect[0],
              y0 = _originalRect[1],
              cx = x0 + r,
              cy = y0 + r;

          var x = evt.offsetX,
              y = evt.offsetY;


          return Math.pow(x - cx, 2) + Math.pow(y - cy, 2) <= Math.pow(r, 2);
        }
        return false;
      }
    }, {
      key: 'draw',
      value: function draw(t) {
        var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

        var _attr = this.attr('pos'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 2),
            x = _attr2[0],
            y = _attr2[1];

        drawingContext.save();
        drawingContext.translate(x, y);
        drawingContext.transform.apply(drawingContext, (0, _toConsumableArray3.default)(this.transform.m));
        drawingContext.globalAlpha *= this.attr('opacity');

        var _originalRect2 = (0, _slicedToArray3.default)(this.originalRect, 2),
            ox = _originalRect2[0],
            oy = _originalRect2[1];

        drawingContext.translate(ox, oy);
        this.render(t, drawingContext);
        drawingContext.restore();
      }
    }, {
      key: 'render',
      value: function render(t, drawingContext) {
        var _this2 = this;

        var textures = this.textures;
        if (textures.length) {
          if (this.images) {
            textures.forEach(function (texture, i) {
              var img = _this2.images[i];
              var rect = texture.rect || [0, 0].concat((0, _toConsumableArray3.default)(_this2.innerSize));
              var srcRect = texture.srcRect;

              if (srcRect) {
                drawingContext.drawImage.apply(drawingContext, [img].concat((0, _toConsumableArray3.default)(srcRect), (0, _toConsumableArray3.default)(rect)));
              } else {
                drawingContext.drawImage.apply(drawingContext, [img].concat((0, _toConsumableArray3.default)(rect)));
              }
            });
          }
        } else {
          var color = this.attr('color');
          drawingContext.fillStyle = color;

          var r = this.attr('r'),
              stroke = this.attr('stroke');

          // draw circle
          drawingContext.beginPath();
          drawingContext.arc(r, r, r, 0, Math.PI * 2, true);

          if (stroke) {
            drawingContext.strokeStyle = this.stroke.color;
            drawingContext.lineWidth = this.stroke.thinkness;
            drawingContext.stroke();
          }

          drawingContext.closePath();
          drawingContext.fill();
        }

        return drawingContext;
      }
    }, {
      key: 'contentSize',
      get: function get() {
        if (this.textures.length) {
          return (0, _get3.default)(Particle.prototype.__proto__ || (0, _getPrototypeOf2.default)(Particle.prototype), 'contentSize', this);
        }
        var d = this.attr('r') * 2;
        return [d, d];
      }
    }]);
    return Particle;
  }(Sprite), (_applyDecoratedDescriptor(_class.prototype, 'contentSize', [flow], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'contentSize'), _class.prototype)), _class);


  Particle.defineAttributes({
    init: function init(attr) {
      attr.setDefault({
        r: 0,
        color: 'rgba(255,0,0,1)',
        stroke: null // {color, thinkness}
      });
    },
    color: function color(attr, val) {
      attr.set('color', parseColorString(val));
    },
    stroke: function stroke(attr, val) {
      attr.set('stroke', val);
    },
    r: function r(attr, val) {
      attr.clearFlow();
      attr.set('r', val);
    }
  });

  registerNodeType('proton', Particle);
  return Particle;
}