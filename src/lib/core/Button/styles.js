// @flow
import styled from 'styled-components';
import MButton from '@material-ui/core/Button';

import * as fonts from '../../helpers/fonts';
import colors from '../../helpers/colors';

import {
  getBgColor,
  getColor,
  getButtonHeight,
  getButtonPadding,
  getButtonFontSize,
  getButtonLineHeight,
} from './utils';

type ButtonProps = {
  options: {
    type: ButtonType,
    state: ButtonState,
    colorVariant: ButtonColorVariant,
    disabled: ButtonDisabled,
    size: ButtonSize,
    device: Device,
  },
};

export const SButton = styled(MButton)`
  min-height: 0px !important;
  height: ${(props: ButtonProps) =>
    getButtonHeight(props.options.size, props.options.device)};
  padding: ${(props: ButtonProps) =>
    getButtonPadding(props.options.size, props.options.device)};
  box-sizing: border-box;
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
    font-size: ${(props: ButtonProps) =>
      getButtonFontSize(props.options.size, props.options.device)};
    line-height: ${(props: ButtonProps) =>
      getButtonLineHeight(props.options.size, props.options.device)};
  }
`;

export const Icon = styled.span`
  margin-right: 10px;
  height: 18px;
`;
