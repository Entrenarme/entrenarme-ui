// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import RelativePrice from './index';

storiesOf('RelativePrice', module).add(
  'default',
  withInfo('Relative price no props')(() => <RelativePrice />),
);

storiesOf('RelativePrice', module).add(
  'price prop',
  withInfo('Relative price with price')(() => <RelativePrice price={2} />),
);

storiesOf('RelativePrice', module).add(
  'price and currency prop',
  withInfo('Relative price with price and currency')(() => (
    <RelativePrice price={3} currency="$" />
  )),
);
