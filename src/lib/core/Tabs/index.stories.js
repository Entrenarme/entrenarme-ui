// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import SwitchTab from './index';

storiesOf('Tabs', module).add('default', () => (
  <SwitchTab>
    <div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
    </div>
    <div>
      <p>bla1</p>
      <p>bla2</p>
      <p>bla3</p>
    </div>
  </SwitchTab>
));
