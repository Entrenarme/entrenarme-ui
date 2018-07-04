// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ShowCard from './index';
import P from '../Text/Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh' }}>{storyFn()}</div>
);

storiesOf('ShowCard', module)
  .addDecorator(ElementDecoration)
  .add('Show card with basic content', () => (
    <ShowCard title="Más filtros">
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    </ShowCard>
  ));
