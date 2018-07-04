// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Radio from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Radio', module)
  .add('default', () => <Radio {...actions} />)
  .add('with label', () => <Radio {...actions} label="Label" />);
