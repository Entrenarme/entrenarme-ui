// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import HexagonImage from './index';
import Slider from '../Slider/index';

const customImage = 'xB1sQl1TuP0yFj7qn8gb_sebas-b.jpg';

storiesOf('HexagonImage', module).add('default', () => (
  <div style={{ display: 'flex' }}>
    <HexagonImage url={customImage} title="Entrenamiento personal" />
    <HexagonImage url={customImage} title="Pesas" />
  </div>
));

storiesOf('HexagonImage', module).add('mobile', () => (
  <Slider itemsToShow={1} disableDots>
    <div>
      <HexagonImage url={customImage} title="Entrenamiento personal" />
    </div>
    <div>
      <HexagonImage url={customImage} title="Pesas" />
    </div>
  </Slider>
));
