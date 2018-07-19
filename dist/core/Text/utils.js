'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var textSizeTransform = function textSizeTransform(size, device, modifiers) {
  if (size === 'large') {
    return device === 'mobile' || device === 'iphone' ? modifiers.normalMobile + modifiers.sizeModifier : modifiers.normalDesktop + modifiers.sizeModifier;
  } else if (size === 'small') {
    return device === 'mobile' || device === 'iphone' ? modifiers.normalMobile - modifiers.sizeModifier : modifiers.normalDesktop - modifiers.sizeModifier;
  } else {
    return device === 'mobile' || device === 'iphone' ? modifiers.normalMobile : modifiers.normalDesktop;
  }
};

var marginBottomSize = function marginBottomSize(size, device) {
  if (size === 'large') {
    return device === 'mobile' || device === 'iphone' ? 1.25 : 1.875;
  } else if (size === 'small') {
    return device === 'mobile' || device === 'iphone' ? 0.3125 : 0.625;
  } else {
    return device === 'mobile' || device === 'iphone' ? 0.625 : 1.25;
  }
};

exports.textSizeTransform = textSizeTransform;
exports.marginBottomSize = marginBottomSize;