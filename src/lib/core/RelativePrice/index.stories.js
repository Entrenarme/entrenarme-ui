// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import RelativePrice from './index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('RelativePrice', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Relative price no props')(() => <RelativePrice />));

storiesOf('RelativePrice', module)
  .addDecorator(ElementDecoration)
  .add(
    'price prop',
    withInfo('Relative price with price')(() => <RelativePrice price={2} />),
  );

storiesOf('RelativePrice', module)
  .addDecorator(ElementDecoration)
  .add(
    'price and currency prop',
    withInfo('Relative price with price and currency')(() => (
      <RelativePrice price={3} currency="$" />
    )),
  );
