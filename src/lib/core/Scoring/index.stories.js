// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Scoring from './index';

const ElementDecorationWidth = storyFn => (
  <div style={{ width: '190px', borderRight: '1px solid' }}>{storyFn()}</div>
);

storiesOf('Scoring', module).add('default', () => (
  <Scoring>Entrenamiento personal</Scoring>
));

storiesOf('Scoring', module).add('score = 3', () => (
  <Scoring score={3}>Entrenamiento personal</Scoring>
));

storiesOf('Scoring', module)
  .addDecorator(ElementDecorationWidth)
  .add('ellipsis 190px', () => (
    <Scoring score={3}>Entrenamiento personal</Scoring>
  ));
