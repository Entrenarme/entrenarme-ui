// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MapMarker from './index';

storiesOf('MapMarker', module).add(
  'default',
  withInfo('Map marker')(() => (
    <MapMarker
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);

storiesOf('MapMarker', module).add(
  'center type',
  withInfo('Map marker')(() => (
    <MapMarker
      type="center"
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);

storiesOf('MapMarker', module).add(
  'trainer type',
  withInfo('Map marker')(() => (
    <MapMarker
      type="trainer"
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);

storiesOf('MapMarker', module).add(
  'center type visited',
  withInfo('Map marker')(() => (
    <MapMarker
      type="center"
      visited
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);
