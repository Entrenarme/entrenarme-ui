// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import H4 from './index';
import P from '../../Paragraph/index';

storiesOf('Text/Headers/H4', module).add('default', () => (
  <div>
    <H4>Heading 4</H4>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget. Phasellus eleifend risus et arcu laoreet, vitae lobortis
      turpis feugiat. Maecenas pulvinar ultricies risus nec tincidunt. Donec
      tristique imperdiet dui at egestas. Praesent ornare et ante sit amet
      condimentum.
    </P>
  </div>
));

storiesOf('Text/Headers/H4', module).add('small', () => (
  <div>
    <H4 size="small">Heading 4</H4>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget. Phasellus eleifend risus et arcu laoreet, vitae lobortis
      turpis feugiat. Maecenas pulvinar ultricies risus nec tincidunt. Donec
      tristique imperdiet dui at egestas. Praesent ornare et ante sit amet
      condimentum.
    </P>
  </div>
));

storiesOf('Text/Headers/H4', module).add('large', () => (
  <div>
    <H4 size="large">Heading 4</H4>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget. Phasellus eleifend risus et arcu laoreet, vitae lobortis
      turpis feugiat. Maecenas pulvinar ultricies risus nec tincidunt. Donec
      tristique imperdiet dui at egestas. Praesent ornare et ante sit amet
      condimentum.
    </P>
  </div>
));

storiesOf('Text/Headers/H4', module).add('color warning', () => (
  <div>
    <H4 color="warning">Heading 4</H4>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget. Phasellus eleifend risus et arcu laoreet, vitae lobortis
      turpis feugiat. Maecenas pulvinar ultricies risus nec tincidunt. Donec
      tristique imperdiet dui at egestas. Praesent ornare et ante sit amet
      condimentum.
    </P>
  </div>
));
