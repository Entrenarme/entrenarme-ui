// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PriceRank from './index';

storiesOf('PriceRank', module).add(
  'default',
  withInfo('Price rank')(() => (
    <PriceRank callback={rank => console.log(rank)} />
  )),
);

storiesOf('PriceRank', module).add(
  'with dollar currency',
  withInfo('Price rank')(() => (
    <PriceRank currency="$" callback={rank => console.log(rank)} />
  )),
);
