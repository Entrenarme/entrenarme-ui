// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SeeMore from './index';

storiesOf('SeeMore', module).add(
  'default',
  withInfo('SeeMore')(() => (
    <SeeMore maxChars={200} actionText={<div>ver más</div>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget.
    </SeeMore>
  )),
);
