// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import H4 from './index';
import P from '../../Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '4rem' }}>{storyFn()}</div>
);

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add('default', withInfo('Heading 4')(() => <H4>Heading 4</H4>));

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add('small', withInfo('Heading 4')(() => <H4 s>Heading 4</H4>));

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add('large', withInfo('Heading 4')(() => <H4 l>Heading 4</H4>));

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'color warning',
    withInfo('Heading 4')(() => <H4 color="warning">Heading 4</H4>),
  );

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-l',
    withInfo('Heading 4')(() => (
      <div>
        <H4 marginBottom="l">Heading 4</H4>
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

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-m',
    withInfo('Heading 4')(() => (
      <div>
        <H4>Heading 4</H4>
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

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'margin-bottom-s',
    withInfo('Heading 4')(() => (
      <div>
        <H4 marginBottom="s">Heading 4</H4>
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

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-center',
    withInfo('Heading 4')(() => (
      <div>
        <H4 textAlign="center">Heading 4</H4>
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

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-default',
    withInfo('Heading 4')(() => (
      <div>
        <H4>Heading 4</H4>
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

storiesOf('Text/Headers/H4', module)
  .addDecorator(ElementDecoration)
  .add(
    'text-align-right',
    withInfo('Heading 4')(() => (
      <div>
        <H4 textAlign="right">Heading 4</H4>
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
