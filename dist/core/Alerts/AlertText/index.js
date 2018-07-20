'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  display: flex;\n  animation: ', ';\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 4px;\n  padding: 15px 20px;\n\n  background-color: ', ';\n\n  > div > div {\n    color: ', ';\n  }\n\n  @keyframes fadeOut {\n    0% {\n      opacity: 1;\n    }\n\n    30% {\n      opacity: 0;\n    }\n\n    100% {\n      height: 0px;\n      padding: 0px;\n      opacity: 0;\n    }\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    > div > div {\n      align-self: flex-start;\n    }\n\n    padding: 15px 20px;\n    align-items: flex-start;\n  }\n'], ['\n  font-family: ', ';\n  display: flex;\n  animation: ', ';\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 4px;\n  padding: 15px 20px;\n\n  background-color: ', ';\n\n  > div > div {\n    color: ', ';\n  }\n\n  @keyframes fadeOut {\n    0% {\n      opacity: 1;\n    }\n\n    30% {\n      opacity: 0;\n    }\n\n    100% {\n      height: 0px;\n      padding: 0px;\n      opacity: 0;\n    }\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    > div > div {\n      align-self: flex-start;\n    }\n\n    padding: 15px 20px;\n    align-items: flex-start;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 1.375rem;\n  margin-right: 20px;\n  align-self: flex-start;\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    font-size: 1.125rem;\n    margin-right: 14px;\n  }\n'], ['\n  font-size: 1.375rem;\n  margin-right: 20px;\n  align-self: flex-start;\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    font-size: 1.125rem;\n    margin-right: 14px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 1rem;\n  color: ', ';\n\n  a {\n    color: ', ' !important;\n    text-decoration: none !important;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    font-size: 0.875rem;\n  }\n'], ['\n  font-size: 1rem;\n  color: ', ';\n\n  a {\n    color: ', ' !important;\n    text-decoration: none !important;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    font-size: 0.875rem;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  font-size: 1.375rem;\n  cursor: pointer;\n  margin-left: 20px;\n  color: ', ';\n  align-self: flex-start;\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    font-size: 1.125rem;\n  }\n'], ['\n  font-size: 1.375rem;\n  cursor: pointer;\n  margin-left: 20px;\n  color: ', ';\n  align-self: flex-start;\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    font-size: 1.125rem;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _fonts = require('../../../helpers/fonts');

var _colors = require('../../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setColor = function setColor(status, elementType) {
  var colorType = elementType === 'icon' ? 'default' : 'light';

  switch (status) {
    case 'primary':
      return _colors2.default.primary[colorType];
    case 'secondary':
      return _colors2.default.secondary[colorType];
    case 'success':
      return _colors2.default.success[colorType];
    case 'warning':
      return _colors2.default.warning[colorType];
    default:
      return _colors2.default.error[colorType];
  }
};

var MainContainer = _styledComponents2.default.div(_templateObject, _fonts.regularFont, function (props) {
  return props.options.hideState && 'fadeOut 1s forwards';
}, function (props) {
  return setColor(props.options.type);
}, function (props) {
  return setColor(props.options.type, 'icon');
});

var RequiredContent = _styledComponents2.default.div(_templateObject2);

var IconContainer = _styledComponents2.default.div(_templateObject3);

var TextContainer = _styledComponents2.default.div(_templateObject4, _colors2.default.text, _colors2.default.secondary.default);

var CloseIconContainer = _styledComponents2.default.div(_templateObject5, _colors2.default.text);

var AlertText = function (_React$Component) {
  _inherits(AlertText, _React$Component);

  function AlertText() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlertText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlertText.__proto__ || Object.getPrototypeOf(AlertText)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hideState: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlertText, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          icon = _props.icon,
          text = _props.text,
          link = _props.link,
          type = _props.type,
          canClose = _props.canClose,
          rest = _objectWithoutProperties(_props, ['icon', 'text', 'link', 'type', 'canClose']);

      var hideState = this.state.hideState;


      return React.createElement(
        MainContainer,
        Object.assign({ options: { type: type, hideState: hideState } }, rest),
        React.createElement(
          RequiredContent,
          null,
          React.createElement(
            IconContainer,
            null,
            icon
          ),
          React.createElement(
            TextContainer,
            null,
            text,
            ' ',
            link
          )
        ),
        canClose ? React.createElement(
          CloseIconContainer,
          {
            onClick: function onClick() {
              _this2.setState({ hideState: true });
            }
          },
          React.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faTimes })
        ) : null
      );
    }
  }]);

  return AlertText;
}(React.Component);

AlertText.defaultProps = {
  type: 'primary',
  canClose: false,
  onClose: function onClose() {}
};

exports.default = AlertText;