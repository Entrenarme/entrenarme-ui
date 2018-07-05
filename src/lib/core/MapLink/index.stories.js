// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MapLink from './index';

storiesOf('MapLink', module).add(
  'Default',
  withInfo('MapLink')(() => (
    <MapLink buttonTitle="Ver mapa" onClick={() => console.log('hola!')} />
  )),
);
