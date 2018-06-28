import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H2 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H2>Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});
