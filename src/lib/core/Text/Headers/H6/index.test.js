import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H6 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H6>Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with l prop', () => {
  const { container } = render(<H6 l>Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with s prop', () => {
  const { container } = render(<H6 s>Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H6 color="warning">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with margin', () => {
  const { container } = render(<H6 marginBottom="s">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H6 textAlign="center">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});
