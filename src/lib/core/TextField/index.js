// @flow
import * as React from 'react';
import MTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  createMuiTheme,
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

import colors from '../../helpers/colors';
import { regularFont } from '../../helpers/fonts';

type Props = {
  label?: string,
  placeholder?: React.Node,
  adornment?: React.Node,
  type?: 'text' | 'number' | 'password' | 'email',
  onChange?: Function,
  debounceMs?: number,
};

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.secondary.default, dark: colors.secondary.default },
    error: { main: colors.error.default, dark: colors.error.default },
    text: { primary: colors.gray.placeholder },
  },
});

const generateClassName = createGenerateClassName({ productionPrefix: 'eui' });
const jss = create(jssPreset());

const STextField = styled(MTextField)`
  > div:before {
    border-bottom: 1px solid ${colors.gray.placeholder};
  }

  input {
    color: ${colors.text} !important;
    font-family: ${regularFont} !important;
  }
`;

class TextField extends React.Component<Props> {
  static defaultProps = {
    label: '',
    placeholder: '',
    adornment: null,
    type: 'text',
    onChange: () => {},
    debounceMs: 0,
  };

  onInputChange = debounce((e: SyntheticEvent<*>) => {
    this.props.onChange(e);
  }, this.props.debounceMs);

  onChange = e => {
    e.persist();
    this.onInputChange(e);
  };

  render() {
    const { adornment, onChange, debounceMs, ...rest } = this.props;
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <STextField
            onChange={this.onChange}
            {...rest}
            InputProps={{
              startAdornment: adornment ? (
                <InputAdornment position="start">{adornment}</InputAdornment>
              ) : null,
            }}
          />
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default TextField;
