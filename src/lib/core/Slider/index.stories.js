// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './index';

storiesOf('Slider', module).add('Show dot navigation', () => (
  <Slider />
));
