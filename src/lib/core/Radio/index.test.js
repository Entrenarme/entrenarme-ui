import * as React from 'react';
import { render } from 'react-testing-library';

import Radio from './index';

test('renders default', () => {
  const { container } = render(<Radio />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with label', () => {
  const { container } = render(<Radio label="Label" />);
  expect(container.firstChild).toMatchSnapshot();
});
