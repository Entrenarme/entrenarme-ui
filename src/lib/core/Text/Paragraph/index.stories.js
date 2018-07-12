// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import P from './index';

storiesOf('Text/Paragraph', module).add('default', () => (
  <P>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
    magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
    magna euismod et. Donec condimentum congue sapien, nec auctor eros sagittis
    eget.
  </P>
));

storiesOf('Text/Paragraph', module).add('large', () => (
  <P size="large">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
    magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
    magna euismod et. Donec condimentum congue sapien, nec auctor eros sagittis
    eget.
  </P>
));

storiesOf('Text/Paragraph', module).add('small', () => (
  <P size="small">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
    magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
    magna euismod et. Donec condimentum congue sapien, nec auctor eros sagittis
    eget.
  </P>
));

storiesOf('Text/Paragraph', module).add('text-align-center', () => (
  <P textAlign="center">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
    magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
    magna euismod et. Donec condimentum congue sapien, nec auctor eros sagittis
    eget.
  </P>
));

storiesOf('Text/Paragraph', module).add('text-align-right', () => (
  <P textAlign="right">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
    magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
    magna euismod et. Donec condimentum congue sapien, nec auctor eros sagittis
    eget.
  </P>
));
