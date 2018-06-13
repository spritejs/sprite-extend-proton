'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

  function TexturedParticle(attr) {
    (0, _classCallCheck3.default)(this, TexturedParticle);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TexturedParticle.__proto__ || (0, _getPrototypeOf2.default)(TexturedParticle)).call(this, attr));

    _this.__cachePolicyThreshold = Infinity;
    return _this;
  }

  (0, _createClass3.default)(TexturedParticle, [{
    key: 'render',
    value: function render(t, drawingContext) {
      var _this2 = this;

      var color = this.attr('color');
      if (color) {
        drawingContext.fillStyle = color;
        var rect = [0, 0].concat((0, _toConsumableArray3.default)(this.clientSize));
        drawingContext.fillRect.apply(drawingContext, (0, _toConsumableArray3.default)(rect));
      }

      var textures = this.textures;
      if (this.images) {
        drawingContext.save();
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
        drawingContext.restore();
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