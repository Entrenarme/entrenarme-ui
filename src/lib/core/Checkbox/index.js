// @flow
import * as React from 'react';
import MCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import P from '../Text/Paragraph';

const theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary.default }, // Purple and green play nicely together.
    secondary: { main: colors.secondary.default }, // This is just green.A700 as hex.
  },
});

type Props = {
  label?: ?string,
};

const SCheckbox = styled(MCheckbox)`
  height: 16px !important;
  width: 16px !important;
  margin-right: 10px !important;
  svg {
    height: 16px;
  }
`;

const Checkbox = ({ label, ...rest }: Props) => (
  <MuiThemeProvider theme={theme}>
    <FormControlLabel
      control={<SCheckbox {...rest} />}
      label={label ? <P noMargin>{label}</P> : null}
    />
  </MuiThemeProvider>
);

Checkbox.defaultProps = {
  label: null,
};

export default Checkbox;
