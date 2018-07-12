import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/index.css';

const req = require.context('../src/lib', true, /.stories.js$/);

addDecorator(withInfo);
addDecorator(storyFn => <div style={{ padding: '3rem' }}>{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
