// @flow
import * as React from 'react';
import MButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

import * as fonts from '../../helpers/fonts';
import colors from '../../helpers/colors';

type ButtonProps = {
  options: {
    type: ButtonType,
    state: ButtonState,
    colorVariant: ButtonColorVariant,
    disabled: ButtonDisabled,
  },
};

const getBgColor = (
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

const getColor = (
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

const SButton = styled(MButton)`
  background-color: ${(props: ButtonProps) =>
    getBgColor(
      props.options.type,
      'default',
      props.options.state,
      props.options.disabled,
      props.options.colorVariant,
    )} !important;
  ${(props: ButtonProps) =>
    props.options.type === 'outline'
      ? `	border: 2px solid ${getColor(
          props.options.type,
          props.options.state,
          props.options.colorVariant,
          props.options.disabled,
        )} !important`
      : props.options.type === 'add'
        ? `border: 2px dashed ${colors.gray.dark} !important;`
        : ''};
  :hover {
    background-color: ${(props: ButtonProps) =>
      getBgColor(
        props.options.type,
        'active',
        props.options.state,
        props.options.disabled,
        props.options.colorVariant,
      )} !important;
  }
  span {
    color: ${(props: ButtonProps) =>
      getColor(
        props.options.type,
        props.options.state,
        props.options.colorVariant,
        props.options.disabled,
      )};
    font-family: ${fonts.mainFont};
  }
`;

type Props = {
  /** This is what is gonig to be rendered inside the button */
  children: React.Node,
  /** onClick handler passed down to the button */
  onClick?: Function,
  /** type of the button, 'default' | 'link' | 'add' | 'outline' */
  type?: ButtonType,
  /** state of the button, 'outline' | 'disabled' | 'loading' | 'icon' */
  state?: ButtonState,
  /** the color of the button, | 'primary' | 'secondary' | 'warning' | 'error' | 'success' */
  colorVariant?: ButtonColorVariant,
  /** the element to be placed on the button */
  icon?: React.Node,
  /** if the button is in disabled state */
  disabled?: ButtonDisabled,
  /** text to be rendered on the loading state */
  loadingText?: React.Node,
  /** text to be rendered on the error state */
  errorText?: React.Node,
  /** text to be rendered on the success state */
  successText?: React.Node,
};

const Icon = styled.span`
  margin-right: 10px;
  height: 18px;
`;

const textToRender = (
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

const Button = ({
  children,
  type,
  state,
  icon,
  colorVariant,
  disabled,
  defaultText,
  loadingText,
  errorText,
  successText,
  ...rest
}: Props) => (
  <SButton
    options={{ type, state, colorVariant, disabled }}
    disabled={
      state === 'loading' ||
      state === 'error' ||
      state === 'success' ||
      disabled
    }
    {...rest}
  >
    {icon ? <Icon>{icon}</Icon> : null}{' '}
    {state === 'loading' ? (
      <CircularProgress
        style={{
          height: '18px',
          width: '18px',
          marginRight: '10px',
          color:
            type === 'add'
              ? colors.secondary.loading
              : type === 'outline'
                ? colors[colorVariant].default
                : colors.gray.loading,
        }}
      />
    ) : null}{' '}
    <span>
      {textToRender(state, children, loadingText, errorText, successText)}
    </span>
  </SButton>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'default',
  state: 'default',
  icon: null,
  disabled: false,
  colorVariant: 'primary',
  loadingText: '',
  errorText: '',
  successText: '',
};

export default Button;
