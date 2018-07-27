'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 24px !important;\n  font-family: ', ' !important;\n  font-size: ', ' !important;\n  background-color: ', ' !important;\n\n  span {\n    color: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem !important;\n  }\n'], ['\n  height: 24px !important;\n  font-family: ', ' !important;\n  font-size: ', ' !important;\n  background-color: ', ' !important;\n\n  span {\n    color: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem !important;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Chip = require('@material-ui/core/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss = require('jss');

var _styles = require('@material-ui/core/styles');

var _fonts = require('../../helpers/fonts');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var generateClassName = (0, _styles.createGenerateClassName)({ productionPrefix: 'eui' });
var jss = (0, _jss.create)((0, _styles.jssPreset)());

var ExtendedTag = (0, _styledComponents2.default)(_Chip2.default)(_templateObject, _fonts.regularFont, function (props) {
  return props.options && props.options.xs ? '0.5625rem' : '0.875rem';
}, function (props) {
  return props.options.bgcolor;
}, function (props) {
  return props.options.color;
});

var Tag = function Tag(_ref) {
  var title = _ref.title,
      bgcolor = _ref.bgcolor,
      color = _ref.color,
      xs = _ref.xs;

  return React.createElement(
    _JssProvider2.default,
    { jss: jss, generateClassName: generateClassName },
    React.createElement(ExtendedTag, { label: title, options: { bgcolor: bgcolor, color: color, xs: xs } })
  );
};

Tag.defaultProps = {
  bgcolor: _colors2.default.gray.light,
  color: _colors2.default.text,
  xs: false
};

exports.default = Tag;