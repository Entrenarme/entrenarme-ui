// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ExpandCard from './index.js';
import P from '../Text/Paragraph/index';

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh', padding: '20px' }}>
    {storyFn()}
  </div>
);

storiesOf('ExpandCard', module)
  .addDecorator(ElementDecoration)
  .add('Multi open', () => (
    <ExpandCard>
      <ExpandCard.Element>
        <ExpandCard.Title>
          <P>Hola</P>
        </ExpandCard.Title>
        <ExpandCard.Content>
          <P>
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
          </P>
        </ExpandCard.Content>
      </ExpandCard.Element>
      <ExpandCard.Element>
        <ExpandCard.Title>
          <P>Hola</P>
        </ExpandCard.Title>
        <ExpandCard.Content>
          <P>
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
          </P>
        </ExpandCard.Content>
      </ExpandCard.Element>
    </ExpandCard>
  ));

storiesOf('ExpandCard', module)
  .addDecorator(ElementDecoration)
  .add('Only 1 open', () => (
    <ExpandCard singleShow>
      <ExpandCard.Element>
        <ExpandCard.Title>
          <P>Hola</P>
        </ExpandCard.Title>
        <ExpandCard.Content>
          <P>
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
          </P>
        </ExpandCard.Content>
      </ExpandCard.Element>
      <ExpandCard.Element>
        <ExpandCard.Title>
          <P>Hola</P>
        </ExpandCard.Title>
        <ExpandCard.Content>
          <P>
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
            Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
          </P>
        </ExpandCard.Content>
      </ExpandCard.Element>
    </ExpandCard>
  ));

storiesOf('ExpandCard', module)
  .addDecorator(ElementDecoration)
  .add('Conditional close', () => {
    let toggle = false;

    return (
      <div>
        <button
          onClick={() => {
            toggle = true;
          }}
        >
          Close all
        </button>
        <hr />
        <ExpandCard closeAction={toggle}>
          <ExpandCard.Element>
            <ExpandCard.Title>
              <P>Hola</P>
            </ExpandCard.Title>
            <ExpandCard.Content>
              <P>
                Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
              </P>
            </ExpandCard.Content>
          </ExpandCard.Element>
          <ExpandCard.Element>
            <ExpandCard.Title>
              <P>Hola</P>
            </ExpandCard.Title>
            <ExpandCard.Content>
              <P>
                Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
                Blabla Blabla Blabla Blabla Blabla Blabla Blabla Blabla
              </P>
            </ExpandCard.Content>
          </ExpandCard.Element>
        </ExpandCard>
      </div>
    );
  });
