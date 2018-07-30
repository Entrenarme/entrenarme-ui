// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import OnlineDot from './index';

storiesOf('OnlineDot', module)
  .add('default', () => <OnlineDot />)
  .add('offline', () => <OnlineDot online={false} />);
