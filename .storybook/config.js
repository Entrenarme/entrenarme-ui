import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../src/index.css';

const req = require.context('../src/lib', true, /.stories.js$/);

addDecorator(storyFn => <div style={{ padding: '3rem' }}>{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
