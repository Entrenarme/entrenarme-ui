// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SeeMore from './index';
import P from '../Text/Paragraph/index';
import H5 from '../Text/Headers/H5/index';

storiesOf('SeeMore', module).add(
  'plain text',
  withInfo('SeeMore')(() => (
    <SeeMore maxChars={200} actionText={<P>ver más</P>}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget.
    </SeeMore>
  )),
);

storiesOf('SeeMore', module).add(
  'with P tag',
  withInfo('SeeMore')(() => (
    <div>
      <SeeMore maxChars={200} actionText={<P>ver más</P>}>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
      </SeeMore>
    </div>
  )),
);

storiesOf('SeeMore', module).add(
  'with H5 tag',
  withInfo('SeeMore')(() => (
    <SeeMore maxChars={200} actionText={<H5>ver más</H5>}>
      <H5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </H5>
    </SeeMore>
  )),
);
