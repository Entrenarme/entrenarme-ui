'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  vertical-align: top;\n  height: 30px;\n  overflow: hidden;\n  cursor: pointer;\n\n  margin-right: 10px;\n\n  background-color: ', ';\n  border-radius: 50px;\n'], ['\n  display: inline-flex;\n  align-items: center;\n  vertical-align: top;\n  height: 30px;\n  overflow: hidden;\n  cursor: pointer;\n\n  margin-right: 10px;\n\n  background-color: ', ';\n  border-radius: 50px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.65em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n'], ['\n  cursor: pointer;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.65em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 0.875rem;\n  color: ', ';\n  padding: ', '\n  height: 100%;\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  font-family: ', ';\n  font-size: 0.875rem;\n  color: ', ';\n  padding: ', '\n  height: 100%;\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  padding-left: 10px;\n  padding-right: 12px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.5em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n'], ['\n  cursor: pointer;\n  padding-left: 10px;\n  padding-right: 12px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.5em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _fonts = require('../../helpers/fonts');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainChipContainer = _styledComponents2.default.div(_templateObject, _colors2.default.white.default);

var AddActionContainer = _styledComponents2.default.div(_templateObject2, _colors2.default.primary.light, MainChipContainer, _colors2.default.primary.light);

var BodyContainer = _styledComponents2.default.div(_templateObject3, _fonts.regularFont, _colors2.default.text, function (props) {
  return props.options.hover ? props.options.leftIcon ? '10px 12px 10px 10px' : '10px 10px 10px 12px' : '10px 12px';
}, _colors2.default.gray.light, _colors2.default.gray.light, function (props) {
  return props.options.hover ? '' : _colors2.default.primary.light;
});

var RemoveActionContainer = _styledComponents2.default.div(_templateObject4, _colors2.default.primary.light, MainChipContainer, _colors2.default.primary.light);

var FilterTag = function FilterTag(_ref) {
  var title = _ref.title,
      callback = _ref.callback,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      rest = _objectWithoutProperties(_ref, ['title', 'callback', 'leftIcon', 'rightIcon']);

  return React.createElement(
    MainChipContainer,
    Object.assign({ onClick: function onClick() {
        return callback();
      } }, rest),
    leftIcon ? React.createElement(
      AddActionContainer,
      null,
      leftIcon
    ) : null,
    React.createElement(
      BodyContainer,
      {
        options: { hover: leftIcon || rightIcon, leftIcon: leftIcon, rightIcon: rightIcon }
      },
      title
    ),
    rightIcon ? React.createElement(
      RemoveActionContainer,
      null,
      rightIcon
    ) : null
  );
};

FilterTag.defaultProps = {};

exports.default = FilterTag;