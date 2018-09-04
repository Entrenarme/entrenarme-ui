// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ShowCard from './index.js';
import P from '../Text/Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh', padding: '20px' }}>
    {storyFn()}
  </div>
);

storiesOf('ShowCard', module)
  .addDecorator(ElementDecoration)
  .add('Show card with basic content', () => (
    <ShowCard>
      <div panel="panel1">
        <div>jajaja</div>
        <div>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
            justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
            nec auctor eros sagittis eget.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
            justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
            nec auctor eros sagittis eget.
          </P>
        </div>
      </div>
      <div panel="panel2">
        <div>jajaja22</div>
        <div>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
            justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
            nec auctor eros sagittis eget.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
            justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
            nec auctor eros sagittis eget.
          </P>
        </div>
      </div>
    </ShowCard>
  ));

/* 
  
  prototipo::

  - props:
    * singleDisplay: Solo una tab puede estar abierta al mismo tiempo
    * handleChange: Pasamos la funcion encargada de la apertura de tabs, para control condicional

  <ShowCard singleDisplay handleChange>
    <ShowCard.Title>
      titulo 1
    </ShowCard.Title>
    <ShowCard.Container>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
        justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
        nec auctor eros sagittis eget.
      </P>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
        justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
        nec auctor eros sagittis eget.
      </P>
    </ShowCard.Container>
  </ShowCard>
  
  */
