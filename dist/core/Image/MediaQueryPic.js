'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _config = require('../../helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Desktop = function Desktop(props) {
  return React.createElement(_reactResponsive2.default, Object.assign({}, props, {
    minWidth: props.type === 'cover' ? 1600 : 1024,
    values: { deviceWidth: 0 }
  }));
};
var Tablet = function Tablet(props) {
  return React.createElement(_reactResponsive2.default, Object.assign({}, props, {
    minWidth: props.type === 'cover' ? 1024 : 768,
    maxWidth: props.type === 'cover' ? 1599 : 1023,
    values: { deviceWidth: 0 }
  }));
};
var Mobile = function Mobile(props) {
  return React.createElement(_reactResponsive2.default, Object.assign({}, props, {
    minWidth: props.type === 'cover' ? 639 : 375,
    maxWidth: props.type === 'cover' ? 1023 : 767,
    values: { deviceWidth: 0 }
  }));
};
var SmallMobile = function SmallMobile(props) {
  return React.createElement(_reactResponsive2.default, Object.assign({}, props, {
    maxWidth: props.type === 'cover' ? 639 : 374,
    values: { deviceWidth: 0 }
  }));
};

var getSize = function getSize(type, device) {
  switch (type) {
    case 'cover':
      switch (device) {
        case 'desktop':
          return '1920';
        case 'tablet':
          return '1280';
        case 'mobile':
          return '640';
        default:
          return '640';
      }
    case 'gallery':
      switch (device) {
        case 'desktop':
          return '260';
        case 'tablet':
          return '260';
        case 'mobile':
          return '260';
        default:
          return '260';
      }
    default:
      switch (device) {
        case 'desktop':
          return '150';
        case 'tablet':
          return '150';
        case 'mobile':
          return '150';
        default:
          return '150';
      }
  }
};

var MediaQueryPic = function (_React$Component) {
  _inherits(MediaQueryPic, _React$Component);

  function MediaQueryPic() {
    _classCallCheck(this, MediaQueryPic);

    return _possibleConstructorReturn(this, (MediaQueryPic.__proto__ || Object.getPrototypeOf(MediaQueryPic)).apply(this, arguments));
  }

  _createClass(MediaQueryPic, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alt = _props.alt,
          name = _props.name,
          type = _props.type,
          original = _props.original,
          lazy = _props.lazy,
          size = _props.size;

      if (original) {
        var imageSrc = {};
        if (lazy) {
          imageSrc = { 'data-lazy': '' + _config.RESOURCES_URL + type + '/original/' + name };
        } else {
          imageSrc = { src: '' + _config.RESOURCES_URL + type + '/original/' + name };
        }
        return React.createElement('img', Object.assign({}, this.props, imageSrc, { alt: alt }));
      }
      return React.createElement(
        'div',
        null,
        React.createElement(
          Desktop,
          { type: type },
          lazy ? React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            'data-lazy': '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'desktop')) + '/' + name,
            alt: alt
          }, this.props)) : React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            src: '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'desktop')) + '/' + name,
            alt: alt
          }, this.props))
        ),
        React.createElement(
          Tablet,
          { type: type },
          lazy ? React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            'data-lazy': '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'tablet')) + '/' + name,
            alt: alt
          }, this.props)) : React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            src: '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'tablet')) + '/' + name,
            alt: alt
          }, this.props))
        ),
        React.createElement(
          Mobile,
          { type: type },
          lazy ? React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            'data-lazy': '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'mobile')) + '/' + name,
            alt: alt
          }, this.props)) : React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            src: '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'mobile')) + '/' + name,
            alt: alt
          }, this.props))
        ),
        React.createElement(
          SmallMobile,
          { type: type },
          lazy ? React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            'data-lazy': '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'smallMobile')) + '/' + name,
            alt: alt
          }, this.props)) : React.createElement('img', Object.assign({
            width: this.props.width,
            height: this.props.height,
            src: '' + _config.RESOURCES_URL + type + '/' + (size || getSize(type, 'smallMobile')) + '/' + name,
            alt: alt
          }, this.props))
        )
      );
    }
  }]);

  return MediaQueryPic;
}(React.Component);

exports.default = MediaQueryPic;