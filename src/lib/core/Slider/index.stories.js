// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import Slider from './index';

const MainCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
`;

const repetitions = [1, 2, 3, 4, 5];

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh' }}>{storyFn()}</div>
);

storiesOf('Slider', module)
  .addDecorator(ElementDecoration)
  .add('default', () => (
    <Slider>
      {repetitions.map(element => (
        <div>
          <MainCard>
            Number: {element}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit.
          </MainCard>
        </div>
      ))}
    </Slider>
  ));
