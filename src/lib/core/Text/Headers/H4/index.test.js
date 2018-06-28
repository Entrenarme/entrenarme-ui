import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H4 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H4>Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});
