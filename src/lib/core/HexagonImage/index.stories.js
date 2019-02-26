// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import HexagonImage from './index';
import HexagonContainer from './HexagonContainer/index';

const customImage = `https://picsum.photos/200/300/?random`;

storiesOf('HexagonImage', module).add('default', () => (
  <HexagonContainer>
    <HexagonImage url={customImage} title="Entrenamiento personal" />
    <HexagonImage url={customImage} title="Pesas" />
    <HexagonImage url={customImage} title="Futbol" />
  </HexagonContainer>
));
