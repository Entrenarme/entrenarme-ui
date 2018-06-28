import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H5 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H5>Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with l prop', () => {
  const { container } = render(<H5 l>Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with s prop', () => {
  const { container } = render(<H5 s>Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H5 color="warning">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with margin', () => {
  const { container } = render(<H5 marginBottom="s">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H5 textAlign="center">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});
