// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import RelativePrice from './index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('RelativePrice', module)
  .addDecorator(ElementDecoration)
  .add('default', () => <RelativePrice />);

storiesOf('RelativePrice', module)
  .addDecorator(ElementDecoration)
  .add('price prop', () => <RelativePrice price={2} />);

storiesOf('RelativePrice', module)
  .addDecorator(ElementDecoration)
  .add('price and currency prop', () => (
    <RelativePrice price={3} currency="$" />
  ));
