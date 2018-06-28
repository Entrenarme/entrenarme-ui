import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H4 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H4>Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with l prop', () => {
  const { container } = render(<H4 l>Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with s prop', () => {
  const { container } = render(<H4 s>Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H4 color="warning">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with margin', () => {
  const { container } = render(<H4 marginBottom="s">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H4 textAlign="center">Heading</H4>);
  expect(container.firstChild).toMatchSnapshot();
});
