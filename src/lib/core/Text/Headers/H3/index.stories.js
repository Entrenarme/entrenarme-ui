// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H3 from './index';
import P from '../../Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 3')(() => <H3>Heading 3</H3>));

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 3')(() => <H3 s>Heading 3</H3>));

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 3')(() => <H3 l>Heading 3</H3>));

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'color warning',
    withInfo('Heading 3')(() => <H3 color="warning">Heading 3</H3>),
  );

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-l',
    withInfo('Heading 3')(() => (
      <div>
        <H3 marginBottom="l">Heading 3</H3>
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

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-m',
    withInfo('Heading 3')(() => (
      <div>
        <H3>Heading 3</H3>
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

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-s',
    withInfo('Heading 3')(() => (
      <div>
        <H3 marginBottom="s">Heading 3</H3>
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

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-center',
    withInfo('Heading 3')(() => (
      <div>
        <H3 textAlign="center">Heading 3</H3>
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

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-default',
    withInfo('Heading 3')(() => (
      <div>
        <H3>Heading 3</H3>
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

storiesOf('Text/Headers/H3', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-right',
    withInfo('Heading 3')(() => (
      <div>
        <H3 textAlign="right">Heading 3</H3>
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
