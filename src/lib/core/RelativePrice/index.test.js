import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import RelativePrice from './index';

test('renders "RelativePrice" with no props', () => {
  const { container } = render(<RelativePrice />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "RelativePrice" with price of 2', () => {
  const { container } = render(<RelativePrice price={2} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "RelativePrice" with price of 2 and using dollar currency', () => {
  const { container } = render(<RelativePrice price={3} currency="$" />);

  expect(container.firstChild).toMatchSnapshot();
});
