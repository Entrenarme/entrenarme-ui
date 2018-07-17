// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Rating from './index';

storiesOf('Rating', module).add('default', () => <Rating rating={7} />);

storiesOf('Rating', module).add('large', () => (
  <Rating rating={3} size="large" />
));
