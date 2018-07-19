var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(', ');\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n'], ['\n  width: ', ';\n  height: ', ';\n  border-radius: ', ';\n  background-image: url(', ');\n\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import { RESOURCES_URL } from '../../helpers/config';

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
      return RESOURCES_URL + 'profile/36/' + (url ? url : 'default.jpg');
    case 'profile':
      return RESOURCES_URL + 'profile/150/' + (url ? url : 'default.jpg');
    default:
      return RESOURCES_URL + 'profile/40/' + (url ? url : 'default.jpg');
  }
};

var AvatarContainer = styled.div(_templateObject, function (props) {
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

export default Avatar;