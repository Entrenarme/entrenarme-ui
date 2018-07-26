'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n\n  color: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inherit;\n  margin-right: 10px;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    margin-right: 8px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    margin-right: 8px;\n  }\n'], ['\n  display: inherit;\n  margin-right: 10px;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    margin-right: 8px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    margin-right: 8px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    font-size: 0.75rem;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n'], ['\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    font-size: 0.75rem;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../../helpers/fonts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var setColor = function setColor(status) {
  switch (status) {
    case 'success':
      return _colors2.default.success.default;
    case 'warning':
      return _colors2.default.warning.default;
    default:
      return _colors2.default.error.default;
  }
};

var MainContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return setColor(props.options.type);
});

var IconContainer = _styledComponents2.default.div(_templateObject2);

var BodyContainer = _styledComponents2.default.div(_templateObject3, _fonts.regularFont);

var InfoText = function InfoText(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      type = _ref.type;

  return React.createElement(
    MainContainer,
    { options: { type: type } },
    React.createElement(
      IconContainer,
      null,
      icon
    ),
    React.createElement(
      BodyContainer,
      null,
      text
    )
  );
};

exports.default = InfoText;