// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from './index';

storiesOf('Breadcrumb', module).add('with 3 links', () => (
  <Breadcrumb>
    <a>Link 1</a>
    <a>Link 2</a>
    <a>Link 3</a>
  </Breadcrumb>
));

storiesOf('Breadcrumb', module).add('with 5 links', () => (
  <Breadcrumb>
    <a>Link 1</a>
    <a>Link 2</a>
    <a>Link 3</a>
    <a>Link 4</a>
    <a>Link 5</a>
  </Breadcrumb>
));

storiesOf('Breadcrumb', module).add('with disabled links', () => (
  <Breadcrumb>
    <a>Link 1</a>
    <a disabled href="http://www.google.es">Link 2</a>
    <a>Link 3</a>
    <a>Link 4</a>
  </Breadcrumb>
));
