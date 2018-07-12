// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import RelativePrice from './index';

storiesOf('RelativePrice', module).add('default', () => <RelativePrice />);

storiesOf('RelativePrice', module).add('price prop', () => (
  <RelativePrice price={2} />
));

storiesOf('RelativePrice', module).add('price and currency prop', () => (
  <RelativePrice price={3} currency="$" />
));
