// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Tag from './index';

storiesOf('Tag', module).add(
  'default',
  withInfo('Tag')(() => <Tag title="Test" />),
);
