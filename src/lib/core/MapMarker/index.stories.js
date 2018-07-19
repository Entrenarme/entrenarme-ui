// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import MapMarker from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('MapMarker', module).add(
  'default',
  withInfo('Map marker')(() => (
    <MapMarker
      {...actions}
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);

storiesOf('MapMarker', module).add(
  'center type',
  withInfo('Map marker')(() => (
    <MapMarker
      {...actions}
      type="center"
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);

storiesOf('MapMarker', module).add(
  'trainer type',
  withInfo('Map marker')(() => (
    <MapMarker
      {...actions}
      type="trainer"
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);

storiesOf('MapMarker', module).add(
  'center type visited',
  withInfo('Map marker')(() => (
    <MapMarker
      {...actions}
      type="center"
      visited
      callback={() => fetch('https://jsonplaceholder.typicode.com/users')}
    />
  )),
);
