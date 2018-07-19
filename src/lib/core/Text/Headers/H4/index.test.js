import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H4 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H4>Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with large size', () => {
  const { container } = render(<H4 size="large">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with small size', () => {
  const { container } = render(<H4 size="small">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H4 color="warning">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with text align', () => {
  const { container } = render(<H4 textAlign="center">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});
