// @flow
import * as React from 'react';
import MTextField from 'material-ui/TextField';
import InputAdornment from 'material-ui/Input/InputAdornment';
// import {
//   createMuiTheme,
//   MuiThemeProvider,
//   createGenerateClassName,
//   jssPreset,
// } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { SheetsRegistry } from 'react-jss/lib/jss';
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
  value?: string,
};

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: colors.secondary.default, dark: colors.secondary.default },
//     error: { main: colors.error.default, dark: colors.error.default },
//     text: { primary: colors.gray.placeholder },
//   },
// });

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'textfield-eui',
// });
// const jss = create(jssPreset());

const STextField = styled(MTextField)`
  > div:before {
    border-bottom: 1px solid ${colors.gray.placeholder};
  }

  input {
    color: ${colors.text} !important;
    font-family: ${regularFont} !important;
  }
`;

type State = {
  value: string,
};

class TextField extends React.Component<Props, State> {
  static defaultProps = {
    label: '',
    placeholder: '',
    adornment: null,
    type: 'text',
    onChange: () => {},
    debounceMs: 0,
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      this.props.value &&
      this.props.value !== prevProps.value &&
      this.props.value !== this.state.value
    ) {
      this.setState({ value: this.props.value });
    }
  }

  state = {
    value: this.props.value || '',
  };

  onInputChange = debounce(() => {
    const { value } = this.state;
    this.props.onChange(value);
  }, this.props.debounceMs);

  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
    this.onInputChange();
  };

  render() {
    const { adornment, onChange, debounceMs, ...rest } = this.props;
    const { value } = this.state;
    return (
      // <JssProvider jss={jss} generateClassName={generateClassName}>
      //   <MuiThemeProvider theme={theme}>
      <STextField
        onChange={this.onChange}
        {...rest}
        value={value}
        InputProps={{
          startAdornment: adornment ? (
            <InputAdornment position="start">{adornment}</InputAdornment>
          ) : null,
        }}
      />
      //   </MuiThemeProvider>
      // </JssProvider>
    );
  }
}

export default TextField;
