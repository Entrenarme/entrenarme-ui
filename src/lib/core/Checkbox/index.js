// @flow
import * as React from 'react';
import MCheckbox from '@material-ui/core/Checkbox';
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
  productionPrefix: 'checkbox-eui',
});
const jss = create(jssPreset());

type Props = {
  label?: ?string,
};

const SCheckbox = styled(MCheckbox)`
  height: 20px !important;
  width: 20px !important;
  margin-right: 10px !important;
  margin-left: 14px !important;
  svg {
    height: 20px;
  }
`;

const Checkbox = ({ label, ...rest }: Props) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme}>
      <FormControlLabel
        control={<SCheckbox {...rest} />}
        label={label ? <P noMargin>{label}</P> : null}
      />
    </MuiThemeProvider>
  </JssProvider>
);

Checkbox.defaultProps = {
  label: null,
};

export default Checkbox;
