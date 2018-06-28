import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H2 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H2>Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with l prop', () => {
  const { container } = render(<H2 l>Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with s prop', () => {
  const { container } = render(<H2 s>Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H2 color="warning">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with margin', () => {
  const { container } = render(<H2 marginBottom="s">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H2 textAlign="center">Heading</H2>);
  expect(container.firstChild).toMatchSnapshot();
});
