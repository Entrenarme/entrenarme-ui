// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import RatesAdv from './index';

storiesOf('RatesAdv', module)
  .add('default', () => (
    <RatesAdv
      currency="€"
      amount={12}
      topText="desde"
      bottomText="persona/sesión"
      appendButtonText="1a sesión gratis"
    />
  ))
  .add('no button', () => (
    <RatesAdv
      currency="€"
      amount={12}
      topText="desde"
      bottomText="persona/sesión"
    />
  ));
