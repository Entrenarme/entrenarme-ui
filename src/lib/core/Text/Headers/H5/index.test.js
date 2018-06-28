import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H5 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H5>Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});
