import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import MapLink from './index';

test('renders "MapLink" with buttonTitle', () => {
  const { container } = render(<MapLink buttonTitle="Ver mapa" />);

  expect(container.firstChild).toMatchSnapshot();
});
