// @flow
import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import colors from '../../helpers/colors';
import { textToRender } from './utils';
import { SButton, Icon } from './styles';

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
