// @flow
import * as React from 'react';

import colors from '../../helpers/colors';

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
