// @flow
import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import colors from '../../helpers/colors';
import { textToRender, getButtonFontSize } from './utils';
import { SButton, Icon } from './styles';

import Responsive from '../../helpers/Responsive';

const generateClassName = createGenerateClassName({
  productionPrefix: 'button-eui',
});
const jss = create(jssPreset());

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary.default },
    secondary: { main: colors.secondary.default },
  },
});

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
  /** the size of the button */
  size?: ButtonSize,
  /** to render the active variant of the current colorVariant */
  active?: boolean,
  /** Full width of the parent */
  fullWidth: boolean,
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
  size,
  active,
  fullWidth,
  ...rest
}: Props) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <Responsive>
        {({ device }) => (
          <SButton
            options={{
              type,
              state,
              colorVariant,
              disabled,
              size,
              device,
              active,
              fullWidth,
            }}
            disabled={
              state === 'loading' ||
              state === 'error' ||
              state === 'success' ||
              disabled
            }
            {...rest}
          >
            {icon ? <Icon options={{ size, device }}>{icon}</Icon> : null}{' '}
            {state === 'loading' ? (
              <CircularProgress
                style={{
                  height: getButtonFontSize(size, device),
                  width: getButtonFontSize(size, device),
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
              {textToRender(
                state,
                children,
                loadingText,
                errorText,
                successText,
              )}
            </span>
          </SButton>
        )}
      </Responsive>
    </MuiThemeProvider>
  </JssProvider>
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
  size: 'default',
  fullWidth: false,
};

export default Button;
