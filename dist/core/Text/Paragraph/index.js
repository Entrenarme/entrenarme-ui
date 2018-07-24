'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', ';\n  font-size: ', ';\n  font-weight: 400;\n  font-family: ', ';\n  text-align: ', ';\n  color: ', ';\n  margin-top: 0rem;\n  margin-left: 0rem;\n  margin-right: 0rem;\n  margin-bottom: ', ';\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    font-size: ', ';\n    margin-bottom: ', ';\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    font-size: ', ';\n    margin-bottom: ', ';\n  }\n\n  /* iPads (portrait and landscape) ----------- */\n  @media only screen and (min-width: 768px) and (max-width: 1223px) {\n    /* Styles */\n  }\n\n  /* Desktops and laptops ----------- */\n  @media only screen and (min-width: 1224px) {\n    /* Styles */\n  }\n\n  /* Large screens ----------- */\n  @media only screen and (min-width: 1824px) {\n    /* Styles */\n  }\n\n  /* ----------- Retina Screens ----------- */\n  @media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n    /* Styles */\n  }\n'], ['\n  ', ';\n  font-size: ', ';\n  font-weight: 400;\n  font-family: ', ';\n  text-align: ', ';\n  color: ', ';\n  margin-top: 0rem;\n  margin-left: 0rem;\n  margin-right: 0rem;\n  margin-bottom: ', ';\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    font-size: ', ';\n    margin-bottom: ', ';\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    font-size: ', ';\n    margin-bottom: ', ';\n  }\n\n  /* iPads (portrait and landscape) ----------- */\n  @media only screen and (min-width: 768px) and (max-width: 1223px) {\n    /* Styles */\n  }\n\n  /* Desktops and laptops ----------- */\n  @media only screen and (min-width: 1224px) {\n    /* Styles */\n  }\n\n  /* Large screens ----------- */\n  @media only screen and (min-width: 1824px) {\n    /* Styles */\n  }\n\n  /* ----------- Retina Screens ----------- */\n  @media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {\n    /* Styles */\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _fonts = require('../../../helpers/fonts');

var fonts = _interopRequireWildcard(_fonts);

var _colors = require('../../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var normalDesktop = 1;

var normalMobile = 0.875;

var sizeModifier = 0.25;

var textSizeTransform = function textSizeTransform(size, device) {
  if (size === 'large') {
    return device === 'desktop' ? normalDesktop + sizeModifier : normalMobile + sizeModifier;
  } else if (size === 'small') {
    return device === 'desktop' ? normalDesktop - sizeModifier : normalMobile - sizeModifier;
  } else {
    return device === 'desktop' ? normalDesktop : normalMobile;
  }
};

var marginBottomSize = function marginBottomSize(size, device) {
  if (size === 'large') {
    return device === 'desktop' ? 1.875 : 1.25;
  } else if (size === 'small') {
    return device === 'desktop' ? 0.625 : 0.3125;
  } else {
    return device === 'desktop' ? 1.25 : 0.625;
  }
};

var StyledP = _styledComponents2.default.p(_templateObject, function (props) {
  return props.options.noMargin ? 'margin: 0 !important;' : '';
}, function (props) {
  return textSizeTransform(props.options.size, 'desktop') + 'rem';
}, fonts.regularFont, function (props) {
  return props.options.textAlign;
}, function (props) {
  return _colors2.default.text;
}, function (props) {
  return marginBottomSize(props.options.size, 'desktop') + 'rem';
}, function (props) {
  return textSizeTransform(props.options.size, 'mobile') + 'rem';
}, function (props) {
  return marginBottomSize(props.options.size, 'mobile') + 'rem';
}, function (props) {
  return textSizeTransform(props.options.size, 'mobile') + 'rem';
}, function (props) {
  return marginBottomSize(props.options.size, 'mobile') + 'rem';
});

var P = function P(_ref) {
  var children = _ref.children,
      size = _ref.size,
      textAlign = _ref.textAlign,
      noMargin = _ref.noMargin,
      rest = _objectWithoutProperties(_ref, ['children', 'size', 'textAlign', 'noMargin']);

  return React.createElement(
    StyledP,
    Object.assign({}, rest, { options: { size: size, textAlign: textAlign, noMargin: noMargin } }),
    children
  );
};

P.defaultProps = {
  size: 'medium',
  textAlign: 'left',
  noMargin: false
};

exports.default = P;