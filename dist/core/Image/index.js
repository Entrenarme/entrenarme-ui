var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  ', ';\n'], ['\n  ', ';\n  ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import { RESOURCES_URL } from '../../helpers/config';

import FullImage from '../MediaGallery/FullImage';

var Img = styled.img(_templateObject, function (props) {
  return props.options.imageWidth && 'width: ' + props.options.imageWidth + '; flex: 1 0 ' + props.options.imageWidth;
}, function (props) {
  return props.options.imageHeight && 'height: ' + props.options.imageHeight;
});

var getSrc = function getSrc(type, src) {
  if (type === 'gallery') {
    return RESOURCES_URL + 'gallery/260/' + src;
  }
};

var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openDialog: false
    }, _this.onClick = function () {
      var onClick = _this.props.onClick;

      if (onClick) {
        return onClick();
      }
      _this.setState({ openDialog: true });
    }, _this.onCloseDialog = function () {
      return _this.setState({ openDialog: false });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Image, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          imageWidth = _props.imageWidth,
          imageHeight = _props.imageHeight,
          onLoad = _props.onLoad,
          className = _props.className,
          style = _props.style,
          alt = _props.alt,
          type = _props.type;
      var openDialog = this.state.openDialog;

      return React.createElement(
        React.Fragment,
        null,
        React.createElement(Img, {
          draggable: 'false',
          onClick: this.onClick,
          style: style,
          className: className,
          onLoad: onLoad,
          src: getSrc(type, image.value),
          alt: alt,
          options: { imageWidth: imageWidth, imageHeight: imageHeight }
        }),
        React.createElement(FullImage, {
          open: openDialog,
          image: image,
          onClose: this.onCloseDialog
        })
      );
    }
  }]);

  return Image;
}(React.Component);

Image.defaultProps = {
  onLoad: function onLoad() {},
  className: '',
  style: {}
};


export default Image;