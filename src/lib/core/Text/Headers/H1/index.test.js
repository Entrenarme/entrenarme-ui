import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H1 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H1>Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with l prop', () => {
  const { container } = render(<H1 l>Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with s prop', () => {
  const { container } = render(<H1 s>Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H1 color="warning">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with margin', () => {
  const { container } = render(<H1 marginBottom="s">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H1 textAlign="center">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});
