import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H3 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H3>Heading</H3>);
  expect(container.firstChild).toMatchSnapshot();
});
