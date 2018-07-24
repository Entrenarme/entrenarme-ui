'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = exports.getBgColor = exports.textToRender = exports.getButtonLineHeight = exports.getButtonFontSize = exports.getButtonPadding = exports.getButtonHeight = undefined;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getButtonHeight = exports.getButtonHeight = function getButtonHeight(size, device) {
  switch (size) {
    case 'small':
      if (device === 'mobile' || device === 'iphone') return '30px';
      return '34px';
    case 'large':
      if (device === 'mobile' || device === 'iphone') return '40px';
      return '46px';
    case 'xlarge':
      if (device === 'mobile' || device === 'iphone') return '46px';
      return '54px';
    default:
      if (device === 'mobile' || device === 'iphone') return '36px';
      return '40px';
  }
};

var getButtonPadding = exports.getButtonPadding = function getButtonPadding(size, device) {
  switch (size) {
    case 'small':
      if (device === 'mobile' || device === 'iphone') return '0 12px !important';
      return '0 15px !important';
    case 'large':
      if (device === 'mobile' || device === 'iphone') return '0 20px !important';
      return '0 20px !important';
    case 'xlarge':
      if (device === 'mobile' || device === 'iphone') return '0 20px !important';
      return '0 24px !important';
    default:
      if (device === 'mobile' || device === 'iphone') return '0 16px !important';
      return '0 20px !important';
  }
};

var getButtonFontSize = exports.getButtonFontSize = function getButtonFontSize(size, device) {
  switch (size) {
    case 'small':
      if (device === 'mobile' || device === 'iphone') return '0.625rem';
      return '0.75rem';
    case 'large':
      if (device === 'mobile' || device === 'iphone') return '0.875rem';
      return '1rem';
    case 'xlarge':
      if (device === 'mobile' || device === 'iphone') return '1rem';
      return '1.125rem';
    default:
      if (device === 'mobile' || device === 'iphone') return '0.75rem';
      return '0.875rem';
  }
};

var getButtonLineHeight = exports.getButtonLineHeight = function getButtonLineHeight(size, device) {
  switch (size) {
    case 'small':
      if (device === 'mobile' || device === 'iphone') return '10px';
      return '10px';
    case 'large':
      if (device === 'mobile' || device === 'iphone') return '10px';
      return '14px';
    case 'xlarge':
      if (device === 'mobile' || device === 'iphone') return '14px';
      return '14px';
    default:
      if (device === 'mobile' || device === 'iphone') return '12px';
      return '10px';
  }
};

var textToRender = exports.textToRender = function textToRender(state, children, loadingText, errorText, successText) {
  switch (state) {
    case 'loading':
      return loadingText;
    case 'error':
      return errorText;
    case 'success':
      return successText;
    default:
      return children;
  }
};

var getBgColor = exports.getBgColor = function getBgColor(buttonType, options, state, disabled, colorVariant, active) {
  if (buttonType === 'link' || buttonType === 'outline') {
    return _colors2.default.white[active ? 'active' : 'default'];
  }
  if (buttonType === 'add' || disabled) {
    return _colors2.default.gray[active ? 'active' : 'default'];
  }
  if (state === 'error' || state === 'success') {
    return _colors2.default[state][active ? 'active' : 'default'];
  }
  return _colors2.default[colorVariant || state][active ? 'active' : 'default'];
};

var getColor = exports.getColor = function getColor(buttonType, state, colorVariant, disabled) {
  if (buttonType === 'outline') {
    return _colors2.default[colorVariant].default;
  }
  if (disabled) {
    return _colors2.default.gray.dark;
  }
  if (state === 'loading') {
    if (buttonType === 'link') {
      return _colors2.default.gray.loading;
    }
    if (buttonType === 'add') {
      return _colors2.default.secondary.loading;
    }
    return _colors2.default.white.loading;
  }
  if (buttonType === 'link' || buttonType === 'add') {
    return _colors2.default.secondary.default;
  }
  return _colors2.default.white.default;
};