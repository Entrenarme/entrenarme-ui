import * as React from 'react';
import { render } from 'react-testing-library';

import Checkbox from './index';

test('renders default', () => {
  const { container } = render(<Checkbox />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders with label', () => {
  const { container } = render(<Checkbox label="Label" />);
  expect(container.firstChild).toMatchSnapshot();
});
