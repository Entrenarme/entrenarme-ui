'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  text-transform: uppercase;\n  font-size: ', ';\n  font-weight: 600;\n  font-family: ', ';\n  text-align: ', ';\n  color: ', ';\n  margin-top: 0rem;\n  margin-left: 0rem;\n  margin-right: 0rem;\n  margin-bottom: ', ';\n'], ['\n  text-transform: uppercase;\n  font-size: ', ';\n  font-weight: 600;\n  font-family: ', ';\n  text-align: ', ';\n  color: ', ';\n  margin-top: 0rem;\n  margin-left: 0rem;\n  margin-right: 0rem;\n  margin-bottom: ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _fonts = require('../../../../helpers/fonts');

var fonts = _interopRequireWildcard(_fonts);

var _colors = require('../../../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _utils = require('../../utils');

var _Responsive = require('../../../../helpers/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var normalDesktop = 1.75;

var normalMobile = 1.25;

var sizeModifier = 0.25;

var modifiers = {
  normalDesktop: normalDesktop,
  normalMobile: normalMobile,
  sizeModifier: sizeModifier
};

var StyledH2 = _styledComponents2.default.h2(_templateObject, function (props) {
  return (0, _utils.textSizeTransform)(props.options.size, props.options.device, modifiers) + 'rem';
}, fonts.mainFont, function (props) {
  return props.options.textAlign;
}, function (props) {
  return _colors2.default[props.options.color].default;
}, function (props) {
  return (0, _utils.marginBottomSize)(props.options.size, props.options.device, modifiers) + 'rem';
});

var H2 = function H2(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      textAlign = _ref.textAlign,
      rest = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'textAlign']);

  return React.createElement(
    _Responsive2.default,
    null,
    function (_ref2) {
      var device = _ref2.device;
      return React.createElement(
        StyledH2,
        Object.assign({}, rest, { options: { color: color, size: size, textAlign: textAlign, device: device } }),
        children
      );
    }
  );
};

H2.defaultProps = {
  color: 'primary',
  size: 'medium',
  textAlign: 'left'
};

exports.default = H2;