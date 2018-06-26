// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module).add(
  'default',
  withInfo('Button info')(() => <Button {...actions}>default</Button>),
);
