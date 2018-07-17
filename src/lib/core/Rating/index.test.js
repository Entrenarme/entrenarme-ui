import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Rating from './index';

test('renders "Rating" with rating of 4', () => {
  const { container } = render(<Rating rating={4} />);
  expect(container.firstChild).toMatchSnapshot();
});
