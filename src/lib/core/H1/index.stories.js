// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H1 from './index';

storiesOf('H1', module).add(
  'default',
  withInfo('Heading 1')(() => <H1>Heading 1</H1>),
);
