// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ExpandCard from './index.js';
import P from '../Text/Paragraph/index';
import Button from '../Button/index';

const actions = {
  onClick: action('onClick'),
};

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh', padding: '20px' }}>
    {storyFn()}
  </div>
);

class GlobalComponent extends React.Component {
  state = {
    openToggle: false,
    closeToggle: false,
  };

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '25%' }}>
          <Button
            onClick={() =>
              this.setState(prevState => ({
                openToggle: !prevState.openToggle,
              }))
            }
            style={{
              marginBottom: '20px',
            }}
          >
            Open all
          </Button>
          <Button
            onClick={() =>
              this.setState(prevState => ({
                closeToggle: !prevState.closeToggle,
              }))
            }
            style={{
              marginBottom: '20px',
            }}
          >
            Close all
          </Button>
        </div>
        <div style={{ width: '75%' }}>
          <ExpandCard
            openAction={this.state.openToggle}
            closeAction={this.state.closeToggle}
            {...actions}
          >
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
      </div>
    );
  }
}

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
  .add('Conditional expand', () => {
    return <GlobalComponent />;
  });

storiesOf('ExpandCard', module)
  .addDecorator(ElementDecoration)
  .add('Custom styles', () => (
    <ExpandCard>
      <ExpandCard.Element style={{ borderRadius: 0, backgroundColor: 'khaki' }}>
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
      <ExpandCard.Element
        style={{ borderRadius: 0, backgroundColor: 'khaki', marginTop: 0 }}
      >
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
