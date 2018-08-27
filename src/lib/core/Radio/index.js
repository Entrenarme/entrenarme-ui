// @flow
import * as React from 'react';
import MRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  createMuiTheme,
  MuiThemeProvider,
  createGenerateClassName,
  jssPreset,
} from '@material-ui/core/styles';
import styled from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';

import colors from '../../helpers/colors';
import P from '../Text/Paragraph';

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary.default },
    secondary: { main: colors.secondary.default },
  },
});

const generateClassName = createGenerateClassName({
  productionPrefix: 'radio-eui',
});
const jss = create(jssPreset());

type Props = {
  label?: ?string,
};

const SRadio = styled(MRadio)`
  height: 16px !important;
  width: 16px !important;
  margin-right: 10px !important;
  margin-left: 14px !important;
  svg {
    height: 16px;
  }
`;

const Radio = ({ label, ...rest }: Props) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <FormControlLabel
        control={<SRadio {...rest} />}
        label={label ? <P noMargin>{label}</P> : null}
      />
    </MuiThemeProvider>
  </JssProvider>
);

Radio.defaultProps = {
  label: null,
};

export default Radio;
