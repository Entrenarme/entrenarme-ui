// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from './index';
import colors from '../../helpers/colors';

storiesOf('Tag', module)
  .add('default', () => <Tag title="Test" />)
  .add('custom colors', () => (
    <Tag
      xs
      title="1a SESIÓN GRATIS"
      bgcolor={colors.primary.default}
      color={colors.white.default}
    />
  ));
