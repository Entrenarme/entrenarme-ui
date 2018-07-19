// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import HexagonImage from './index';

const customImage = 'xB1sQl1TuP0yFj7qn8gb_sebas-b.jpg';

storiesOf('HexagonImage', module).add('default', () => (
  <HexagonImage url={customImage} />
));
