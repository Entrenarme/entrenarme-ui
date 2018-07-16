// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SeeMore from './index';

storiesOf('SeeMore', module).add(
  'default',
  withInfo('SeeMore')(() => <SeeMore>Hola</SeeMore>),
);
