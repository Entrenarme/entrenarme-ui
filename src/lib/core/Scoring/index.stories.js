// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Scoring from './index';

const ElementDecoration = storyFn => (
  <div style={{ padding: '3rem' }}>{storyFn()}</div>
);

storiesOf('Scoring', module)
  .addDecorator(ElementDecoration)
  .add(
    'default',
    withInfo('Scoring')(() => <Scoring>Entrenamiento personal</Scoring>),
  );

storiesOf('Scoring', module)
  .addDecorator(ElementDecoration)
  .add(
    'score = 3',
    withInfo('Scoring')(() => (
      <Scoring score={3}>Entrenamiento personal</Scoring>
    )),
  );
