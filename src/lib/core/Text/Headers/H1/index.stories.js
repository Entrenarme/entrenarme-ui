// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H1 from './index';
import P from '../../Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 1')(() => <H1>Heading 1</H1>));

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 1')(() => <H1 s>Heading 1</H1>));

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 1')(() => <H1 l>Heading 1</H1>));

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'color warning',
    withInfo('Heading 1')(() => <H1 color="warning">Heading 1</H1>),
  );

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-l',
    withInfo('Heading 1')(() => (
      <div>
        <H1 marginBottom="l">Heading 1</H1>
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

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-m',
    withInfo('Heading 1')(() => (
      <div>
        <H1>Heading 1</H1>
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

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-s',
    withInfo('Heading 1')(() => (
      <div>
        <H1 marginBottom="s">Heading 1</H1>
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

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-center',
    withInfo('Heading 1')(() => (
      <div>
        <H1 textAlign="center">Heading 1</H1>
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

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-default',
    withInfo('Heading 1')(() => (
      <div>
        <H1>Heading 1</H1>
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

storiesOf('Text/Headers/H1', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-right',
    withInfo('Heading 1')(() => (
      <div>
        <H1 textAlign="right">Heading 1</H1>
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
