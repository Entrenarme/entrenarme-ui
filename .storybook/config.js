import * as React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
require('typeface-montserrat');
require('typeface-pt-sans');

import theme from '../getMaterialTheme';

const req = require.context('../src/lib', true, /.stories.js$/);

addDecorator(withInfo);
addDecorator(storyFn => <div style={{ padding: '3rem' }}>{storyFn()}</div>);
addDecorator(storyFn => (
  <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
));

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
