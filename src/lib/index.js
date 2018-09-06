// @flow
import * as React from 'react';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import Button from './core/Button';

const theme = createMuiTheme();

const generateClassName = createGenerateClassName({
  productionPrefix: 'eui',
});
const jss = create(jssPreset());

class Index extends React.Component<*> {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} />
      </JssProvider>
    );
  }
}

export default Index;
