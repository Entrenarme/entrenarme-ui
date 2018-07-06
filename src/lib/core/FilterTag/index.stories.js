// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import FilterTag from './index';

storiesOf('FilterTag', module).add(
  'default',
  withInfo('Filter tag')(() => <FilterTag title="Test" />),
);
