import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H1 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H1>Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});
