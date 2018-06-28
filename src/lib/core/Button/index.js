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
  },
};

const getBgColor = (
  buttonType: ButtonType,
  options: 'default' | 'active',
  state: ButtonState,
) => {
  if (state === 'outline' || buttonType === 'link') {
    return colors.white;
  }
  if (state === 'disabled') {
    return colors.gray.default;
  }
  if (colors[buttonType]) {
    return colors[buttonType][options];
  }
  if (buttonType === 'add') {
    return colors.gray[options === 'default' ? 'default' : 'light'];
  }
  return colors.white;
};

const getColor = (buttonType: ButtonType, state: string) => {
  if (state === 'outline') {
    return colors[buttonType].default;
  }
  if (state === 'loading') {
    if (buttonType === 'link') {
      return colors.gray.loading;
    }
    if (buttonType === 'add') {
      return colors.secondary.loading;
    }
  }
  if (state === 'disabled') {
    return colors.gray.dark;
  }
  if (buttonType === 'link' || buttonType === 'add') {
    return colors.secondary.default;
  }
  return colors.white;
};

const SButton = styled(MButton)`
  background-color: ${(props: ButtonProps) =>
    getBgColor(props.options.type, 'default', props.options.state)} !important;
  ${(props: ButtonProps) =>
    props.options.state === 'outline'
      ? `	border: 2px solid ${getColor(
          props.options.type,
          props.options.state,
        )} !important`
      : ''};
  :hover {
    background-color: ${(props: ButtonProps) =>
      getBgColor(props.options.type, 'active', props.options.state)} !important;
  }
  span {
    color: ${(props: ButtonProps) =>
      getColor(props.options.type, props.options.state)};
    font-family: ${fonts.mainFont};
  }
`;

type Props = {
  /** This is what is gonig to be rendered inside the button */
  children: React.Node,
  /** onClick handler passed down to the button */
  onClick?: Function,
  /** type of the button, will change the color basically */
  type?: ButtonType,
  state?: string,
  icon?: React.Node,
};

const Icon = styled.span`
  margin-right: 10px;
  height: 18px;
`;

const Button = ({ children, type, state, icon, ...rest }: Props) => (
  <SButton
    options={{ type, state }}
    disabled={state === 'loading' || state === 'disabled'}
    {...rest}
  >
    {icon ? <Icon>{icon}</Icon> : null}{' '}
    {state === 'loading' ? <CircularProgress /> : null} <span>{children}</span>
  </SButton>
);

Button.defaultProps = {
  onClick: () => {},
  type: 'primary',
  state: '',
  icon: null,
};

export default Button;
