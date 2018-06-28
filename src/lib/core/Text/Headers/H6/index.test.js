import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H6 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H6>Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});
