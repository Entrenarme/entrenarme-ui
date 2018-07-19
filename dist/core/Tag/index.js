'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 24px !important;\n  font-family: ', ' !important;\n  font-size: 0.875rem !important;\n  background-color: ', ' !important;\n\n  span {\n    color: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem !important;\n  }\n'], ['\n  height: 24px !important;\n  font-family: ', ' !important;\n  font-size: 0.875rem !important;\n  background-color: ', ' !important;\n\n  span {\n    color: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem !important;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Chip = require('@material-ui/core/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _fonts = require('../../helpers/fonts');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExtendedTag = (0, _styledComponents2.default)(_Chip2.default)(_templateObject, _fonts.regularFont, _colors2.default.gray.light, _colors2.default.text);

var Tag = function Tag(_ref) {
  var title = _ref.title;

  return React.createElement(ExtendedTag, { label: title });
};

Tag.defaultProps = {};

exports.default = Tag;