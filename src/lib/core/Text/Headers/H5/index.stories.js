// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H5 from './index';
import P from '../../Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add(
    'default',
    withInfo('Heading 5')(() => (
      <div>
        <H5>Heading 5</H5>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget. Phasellus eleifend risus et arcu
          laoreet, vitae lobortis turpis feugiat. Maecenas pulvinar ultricies
          risus nec tincidunt. Donec tristique imperdiet dui at egestas.
          Praesent ornare et ante sit amet condimentum.
        </P>
      </div>
    )),
  );

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add(
    'small',
    withInfo('Heading 5')(() => (
      <div>
        <H5 size="small">Heading 5</H5>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget. Phasellus eleifend risus et arcu
          laoreet, vitae lobortis turpis feugiat. Maecenas pulvinar ultricies
          risus nec tincidunt. Donec tristique imperdiet dui at egestas.
          Praesent ornare et ante sit amet condimentum.
        </P>
      </div>
    )),
  );

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add(
    'large',
    withInfo('Heading 5')(() => (
      <div>
        <H5 size="large">Heading 5</H5>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget. Phasellus eleifend risus et arcu
          laoreet, vitae lobortis turpis feugiat. Maecenas pulvinar ultricies
          risus nec tincidunt. Donec tristique imperdiet dui at egestas.
          Praesent ornare et ante sit amet condimentum.
        </P>
      </div>
    )),
  );

storiesOf('Text/Headers/H5', module)
  .addDecorator(ElementDecoration)
  .add(
    'color warning',
    withInfo('Heading 5')(() => (
      <div>
        <H5 color="warning">Heading 5</H5>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget. Phasellus eleifend risus et arcu
          laoreet, vitae lobortis turpis feugiat. Maecenas pulvinar ultricies
          risus nec tincidunt. Donec tristique imperdiet dui at egestas.
          Praesent ornare et ante sit amet condimentum.
        </P>
      </div>
    )),
  );
