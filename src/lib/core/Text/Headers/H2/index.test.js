import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H2 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H2>Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with large size', () => {
  const { container } = render(<H2 size="large">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with small size', () => {
  const { container } = render(<H2 size="small">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H2 color="warning">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with text align', () => {
  const { container } = render(<H2 textAlign="center">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});
