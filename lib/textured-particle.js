'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _spriteCore = require('sprite-core');

var _spriteUtils = require('sprite-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TexturedParticle = function (_Sprite) {
  (0, _inherits3.default)(TexturedParticle, _Sprite);

  function TexturedParticle() {
    (0, _classCallCheck3.default)(this, TexturedParticle);
    return (0, _possibleConstructorReturn3.default)(this, (TexturedParticle.__proto__ || (0, _getPrototypeOf2.default)(TexturedParticle)).apply(this, arguments));
  }

  (0, _createClass3.default)(TexturedParticle, [{
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

      var _originalRect = (0, _slicedToArray3.default)(this.originalRect, 2),
          ox = _originalRect[0],
          oy = _originalRect[1];

      drawingContext.translate(ox, oy);
      this.render(t, drawingContext);
      drawingContext.restore();
    }
  }, {
    key: 'render',
    value: function render(t, drawingContext) {
      var _this2 = this;

      var textures = this.textures;
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

      return drawingContext;
    }
  }]);
  return TexturedParticle;
}(_spriteCore.Sprite);

TexturedParticle.defineAttributes({
  init: function init(attr) {
    attr.setDefault({
      color: null
    });
  },
  color: function color(attr, val) {
    attr.clearCache();
    attr.set('color', (0, _spriteUtils.parseColorString)(val));
  }
});

exports.default = TexturedParticle;