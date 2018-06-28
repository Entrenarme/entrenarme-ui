// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import P from './index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('Text/Paragraph', module)
  .addDecorator(ElementDecoration)
  .add(
    'default',
    withInfo('Paragraph')(() => (
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    )),
  );

storiesOf('Text/Paragraph', module)
  .addDecorator(ElementDecoration)
  .add(
    'large',
    withInfo('Paragraph')(() => (
      <P l>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    )),
  );

storiesOf('Text/Paragraph', module)
  .addDecorator(ElementDecoration)
  .add(
    'small',
    withInfo('Paragraph')(() => (
      <P s>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    )),
  );
