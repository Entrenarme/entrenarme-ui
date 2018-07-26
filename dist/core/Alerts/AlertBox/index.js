'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template: ', '\n  grid-gap: 20px;\n  align-items: center;\n  border-radius: 4px;\n\n  padding: 30px;\n  background-color: ', ';\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    grid-template: ', '\n    justify-items: center;\n    padding: 20px 15px;\n  }\n'], ['\n  display: grid;\n  grid-template: ', '\n  grid-gap: 20px;\n  align-items: center;\n  border-radius: 4px;\n\n  padding: 30px;\n  background-color: ', ';\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    grid-template: ', '\n    justify-items: center;\n    padding: 20px 15px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  align-self: self-start;\n  justify-content: center;\n  font-size: 22px;\n  width: 50px;\n  height: 50px;\n  mask: url(', ');\n  background-color: ', ';\n  color: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  align-self: self-start;\n  justify-content: center;\n  font-size: 22px;\n  width: 50px;\n  height: 50px;\n  mask: url(', ');\n  background-color: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  h5 {\n    margin-bottom: 8px !important;\n    color: ', ';\n    font-weight: 400 !important;\n    font-size: 1.125rem !important;\n  }\n\n  p {\n    margin: 0px !important;\n  }\n\n  p:last-child {\n    margin: 0px !important;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    h5 {\n      text-align: center;\n      font-size: 1rem !important;\n    }\n\n    p {\n      text-align: center;\n    }\n  }\n'], ['\n  h5 {\n    margin-bottom: 8px !important;\n    color: ', ';\n    font-weight: 400 !important;\n    font-size: 1.125rem !important;\n  }\n\n  p {\n    margin: 0px !important;\n  }\n\n  p:last-child {\n    margin: 0px !important;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    h5 {\n      text-align: center;\n      font-size: 1rem !important;\n    }\n\n    p {\n      text-align: center;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n\n  > div {\n    margin-top: 10px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    justify-content: center;\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n\n  > div {\n    margin-top: 10px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    justify-content: center;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  align-self: self-start;\n\n  button {\n    background-color: ', ' !important;\n  }\n\n  button:hover {\n    background-color: ', ' !important;\n    opacity: 0.9;\n  }\n'], ['\n  align-self: self-start;\n\n  button {\n    background-color: ', ' !important;\n  }\n\n  button:hover {\n    background-color: ', ' !important;\n    opacity: 0.9;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _config = require('../../../helpers/config');

var _index = require('../../Text/Paragraph/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../Text/Headers/H5/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setColor = function setColor(status, origin) {
  var colorType = origin === 'icon' ? 'default' : 'light';

  switch (status) {
    case 'info':
      return _colors2.default.secondary[colorType];
    default:
      return _colors2.default.warning[colorType];
  }
};

var MainContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.options.button ? '1fr / 50px 1fr auto' : '1fr / 50px 1fr';
}, function (props) {
  return setColor(props.options.type);
}, function (props) {
  return props.options.button ? 'repeat(3, auto) / auto' : 'repeat(2, auto) / auto';
});

var IconContainer = _styledComponents2.default.div(_templateObject2, _config.RESOURCES_URL + 'static/images/general/hex_icon_v2.svg', function (props) {
  return setColor(props.options.type, 'icon');
}, _colors2.default.white.default);

var BodyContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return setColor(props.options.type, 'icon');
});

var TagsContainer = _styledComponents2.default.div(_templateObject4);

var ButtonContainer = _styledComponents2.default.div(_templateObject5, function (props) {
  return setColor(props.options.type, 'icon');
}, function (props) {
  return setColor(props.options.type, 'icon');
});

var AlertBox = function AlertBox(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      text = _ref.text,
      tags = _ref.tags,
      button = _ref.button,
      type = _ref.type,
      rest = _objectWithoutProperties(_ref, ['icon', 'title', 'text', 'tags', 'button', 'type']);

  return React.createElement(
    MainContainer,
    Object.assign({ options: { type: type, button: button } }, rest),
    React.createElement(
      IconContainer,
      { options: { type: type } },
      icon
    ),
    React.createElement(
      BodyContainer,
      { options: { type: type } },
      React.createElement(
        _index4.default,
        null,
        title
      ),
      React.createElement(
        _index2.default,
        null,
        text
      ),
      tags ? React.createElement(
        TagsContainer,
        null,
        tags
      ) : null
    ),
    button ? React.createElement(
      ButtonContainer,
      { options: { type: type } },
      button
    ) : null
  );
};

AlertBox.defaultProps = {
  button: null,
  type: 'info'
};

exports.default = AlertBox;