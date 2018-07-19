'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.SButton = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  min-height: 0px !important;\n  ', ';\n  height: ', ';\n  padding: ', ';\n  box-sizing: border-box;\n  background-color: ', ' !important;\n  ', ';\n  :hover {\n    background-color: ', ' !important;\n  }\n  span {\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    line-height: ', ';\n  }\n'], ['\n  min-height: 0px !important;\n  ', ';\n  height: ', ';\n  padding: ', ';\n  box-sizing: border-box;\n  background-color: ', ' !important;\n  ', ';\n  :hover {\n    background-color: ', ' !important;\n  }\n  span {\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    line-height: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: 10px;\n'], ['\n  margin-right: 10px;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _fonts = require('../../helpers/fonts');

var fonts = _interopRequireWildcard(_fonts);

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SButton = exports.SButton = (0, _styledComponents2.default)(_Button2.default)(_templateObject, function (props) {
  return props.options.size === 'fullwidth' ? 'width: 100%' : '';
}, function (props) {
  return (0, _utils.getButtonHeight)(props.options.size, props.options.device);
}, function (props) {
  return (0, _utils.getButtonPadding)(props.options.size, props.options.device);
}, function (props) {
  return (0, _utils.getBgColor)(props.options.type, 'default', props.options.state, props.options.disabled, props.options.colorVariant, props.options.active);
}, function (props) {
  return props.options.type === 'outline' ? '\tborder: 2px solid ' + (0, _utils.getColor)(props.options.type, props.options.state, props.options.colorVariant, props.options.disabled) + ' !important' : props.options.type === 'add' ? 'border: 2px dashed ' + _colors2.default.gray.dark + ' !important;' : '';
}, function (props) {
  return (0, _utils.getBgColor)(props.options.type, 'default', props.options.state, props.options.disabled, props.options.colorVariant, !props.options.active);
}, function (props) {
  return (0, _utils.getColor)(props.options.type, props.options.state, props.options.colorVariant, props.options.disabled);
}, fonts.mainFont, function (props) {
  return (0, _utils.getButtonFontSize)(props.options.size, props.options.device);
}, function (props) {
  return (0, _utils.getButtonLineHeight)(props.options.size, props.options.device);
});

var Icon = exports.Icon = _styledComponents2.default.span(_templateObject2);