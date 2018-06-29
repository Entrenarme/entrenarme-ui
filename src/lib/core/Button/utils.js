// @flow
import * as React from 'react';

import colors from '../../helpers/colors';

export const getButtonHeight = (size: ButtonSize, device: Device) => {
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

export const getButtonPadding = (size: ButtonSize, device: Device) => {
  switch (size) {
    case 'small':
      if (device === 'mobile' || device === 'iphone')
        return '10px 12px !important';
      return '12px 15px !important';
    case 'large':
      if (device === 'mobile' || device === 'iphone')
        return '15px 20px !important';
      return '16px 20px !important';
    case 'xlarge':
      if (device === 'mobile' || device === 'iphone')
        return '16px 20px !important';
      return '20px 24px !important';
    default:
      if (device === 'mobile' || device === 'iphone')
        return '12px 16px !important';
      return '15px 20px !important';
  }
};

export const getButtonFontSize = (size: ButtonSize, device: Device) => {
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

export const getButtonLineHeight = (size: ButtonSize, device: Device) => {
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

export const textToRender = (
  state?: ButtonState,
  children: React.Node,
  loadingText: React.Node,
  errorText: React.Node,
  successText: React.Node,
) => {
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

export const getBgColor = (
  buttonType: ButtonType,
  options: 'default' | 'active',
  state: ButtonState,
  disabled: ButtonDisabled,
  colorVariant: ButtonColorVariant,
) => {
  if (buttonType === 'link' || buttonType === 'outline') {
    return colors.white.default;
  }
  if (buttonType === 'add' || disabled) {
    return colors.gray.default;
  }
  if (state === 'error' || state === 'success') {
    return colors[state].default;
  }
  return colors[colorVariant || state].default;
};

export const getColor = (
  buttonType: ButtonType,
  state: ButtonState,
  colorVariant: ButtonColorVariant,
  disabled: ButtonDisabled,
) => {
  if (buttonType === 'outline') {
    return colors[colorVariant].default;
  }
  if (disabled) {
    return colors.gray.dark;
  }
  if (state === 'loading') {
    if (buttonType === 'link') {
      return colors.gray.loading;
    }
    if (buttonType === 'add') {
      return colors.secondary.loading;
    }
    return colors.white.loading;
  }
  if (buttonType === 'link' || buttonType === 'add') {
    return colors.secondary.default;
  }
  return colors.white.default;
};
