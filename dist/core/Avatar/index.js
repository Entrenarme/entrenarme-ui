'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(', ');\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n'], ['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(', ');\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require('../../helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setAvatarSize = function setAvatarSize(type) {
  switch (type) {
    case 'header':
      return '36px';
    case 'profile':
      return '150px';
    default:
      return '40px';
  }
};

var setAvatarURL = function setAvatarURL(type, url) {
  switch (type) {
    case 'header':
      return _config.RESOURCES_URL + 'profile/36/' + (url ? url : 'default.jpg');
    case 'profile':
      return _config.RESOURCES_URL + 'profile/150/' + (url ? url : 'default.jpg');
    default:
      return _config.RESOURCES_URL + 'profile/40/' + (url ? url : 'default.jpg');
  }
};

var AvatarContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return setAvatarSize(props.options.type);
}, function (props) {
  return setAvatarSize(props.options.type);
}, function (props) {
  return setAvatarSize(props.options.type);
}, function (props) {
  return props.options.url;
});

var Avatar = function (_React$Component) {
  _inherits(Avatar, _React$Component);

  function Avatar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Avatar.__proto__ || Object.getPrototypeOf(Avatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      url: setAvatarURL(_this.props.type, _this.props.url),
      type: _this.props.type
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Avatar, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          url = _state.url,
          type = _state.type;


      return React.createElement(AvatarContainer, { options: { url: url, type: type } });
    }
  }]);

  return Avatar;
}(React.Component);

Avatar.defaultProps = {
  type: 'default'
};

exports.default = Avatar;