'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  position: relative;\n  ', ';\n  transform: translate3d(\n    ', 'px,\n    0,\n    0\n  );\n'], ['\n  display: flex;\n  position: relative;\n  ', ';\n  transform: translate3d(\n    ', 'px,\n    0,\n    0\n  );\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _Image = require('../Image');

var _Image2 = _interopRequireDefault(_Image);

var _Placeholder = require('./Placeholder');

var _Placeholder2 = _interopRequireDefault(_Placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SGallery = _styledComponents2.default.div(_templateObject, function (props) {
  return props.options.transition ? 'transition: transform 0.3s ease-in-out' : '';
}, function (props) {
  return props.options.offsetWidth;
});

var showPlaceholder = function showPlaceholder(index, visibleImages, lazyload, loadLastTwoImages, _images, initialLoading, infinite) {
  if (lazyload) {
    // if (loadLastTwoImages && index >= _images.length - 2) {
    //   return false;
    // }
    if (infinite && !initialLoading && index >= _images.length - 2) {
      return false;
    }
    if (visibleImages <= index) {
      return true;
    }
  }
  return false;
};

var Gallery = function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.onMediaClick = function (src) {
      return function () {
        if (_this.props.onMediaClick && !_this.props.swiping) {
          _this.props.onMediaClick(src);
        } else {
          return null;
        }
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Gallery, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          offsetWidth = _props.offsetWidth,
          transition = _props.transition,
          lazyload = _props.lazyload,
          _images = _props._images,
          visibleImages = _props.visibleImages,
          placeholderWidth = _props.placeholderWidth,
          imageWidth = _props.imageWidth,
          imageHeight = _props.imageHeight,
          loadMoreImages = _props.loadMoreImages,
          trainerName = _props.trainerName,
          swiping = _props.swiping,
          placeholderBackground = _props.placeholderBackground,
          placeholderChildren = _props.placeholderChildren,
          loadLastTwoImages = _props.loadLastTwoImages,
          prepareForInfinite = _props.prepareForInfinite,
          initialLoading = _props.initialLoading,
          infinite = _props.infinite;

      return visibleImages ? React.createElement(
        SGallery,
        { options: { offsetWidth: offsetWidth, transition: transition }, id: 'gallery_container' },
        _images.map(function (image, index) {
          return showPlaceholder(index, visibleImages, lazyload, loadLastTwoImages, _images, initialLoading, infinite) ? React.createElement(_Placeholder2.default, {
            placeholderWidth: placeholderWidth,
            key: image.keyId || image.id,
            placeholderBackground: placeholderBackground,
            placeholderChildren: placeholderChildren,
            'data-testid': initialLoading ? 'initialLoading' : null
          }) : image.type === 'video' ? React.createElement(
            'div',
            {
              className: 'media',
              key: image.keyId || image.id,
              style: {
                width: placeholderWidth + 'px',
                height: imageHeight + 'px'
              }
            },
            React.createElement(_reactPlayer2.default, {
              url: image.value,
              onReady: loadLastTwoImages && index === _images.length - 1 ? prepareForInfinite : loadMoreImages,
              height: imageHeight,
              width: placeholderWidth,
              controls: true
            })
          ) : React.createElement(_Image2.default, {
            type: 'gallery',
            onClick: _this2.props.onMediaClick ? _this2.onMediaClick(image.value) : null,
            allowOpen: !swiping,
            key: image.keyId || image.id,
            className: 'media',
            image: image,
            alt: trainerName + ' ' + image.sport_name,
            imageWidth: imageWidth,
            imageHeight: imageHeight,
            onLoad: loadLastTwoImages && index === _images.length - 1 ? prepareForInfinite : loadMoreImages
          });
        })
      ) : null;
    }
  }]);

  return Gallery;
}(React.Component);

Gallery.defaultProps = {
  onMediaClick: null,
  trainerName: '',
  placeholderBackground: '',
  placeholderChildren: null
};
exports.default = Gallery;