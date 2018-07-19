var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  position: relative;\n  ', ';\n  transform: translate3d(\n    ', 'px,\n    0,\n    0\n  );\n'], ['\n  display: flex;\n  position: relative;\n  ', ';\n  transform: translate3d(\n    ', 'px,\n    0,\n    0\n  );\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import Player from 'react-player';

import Image from '../Image';
import Placeholder from './Placeholder';

var SGallery = styled.div(_templateObject, function (props) {
  return props.options.transition ? 'transition: transform 0.3s ease-in-out' : '';
}, function (props) {
  return props.options.offsetWidth;
});

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
        if (_this.props.onMediaClick) {
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
          trainerName = _props.trainerName;

      return React.createElement(
        SGallery,
        { options: { offsetWidth: offsetWidth, transition: transition }, id: 'gallery_container' },
        _images.map(function (image, index) {
          return lazyload && visibleImages !== null && index >= visibleImages && index < _images.length - 2 ? React.createElement(
            Placeholder,
            {
              placeholderWidth: placeholderWidth,
              key: image.keyId || image.id
            },
            'placeholder'
          ) : image.type === 'video' ? React.createElement(
            'div',
            {
              className: 'media',
              key: image.keyId || image.id,
              style: {
                width: placeholderWidth + 'px',
                height: imageHeight + 'px'
              }
            },
            React.createElement(Player, {
              url: image.value,
              onReady: loadMoreImages,
              height: imageHeight,
              width: placeholderWidth,
              controls: true
            })
          ) : React.createElement(Image, {
            type: 'gallery',
            onClick: _this2.props.onMediaClick ? _this2.onMediaClick(image.value) : null,
            key: image.keyId || image.id,
            className: 'media',
            image: image,
            alt: trainerName + ' ' + image.sport_name,
            imageWidth: imageWidth,
            imageHeight: imageHeight,
            onLoad: loadMoreImages
          });
        })
      );
    }
  }]);

  return Gallery;
}(React.Component);

Gallery.defaultProps = {
  onMediaClick: null,
  trainerName: ''
};


export default Gallery;