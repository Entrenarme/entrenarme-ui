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
      <P size="large">
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
      <P size="small">
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
    'text-align-center',
    withInfo('Paragraph')(() => (
      <P textAlign="center">
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
    'text-align-right',
    withInfo('Paragraph')(() => (
      <P textAlign="right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    )),
  );
