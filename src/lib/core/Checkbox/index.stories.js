// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Checkbox', module)
  .add('default', () => <Checkbox {...actions} />)
  .add('with label', () => <Checkbox {...actions} label="Label" />);
