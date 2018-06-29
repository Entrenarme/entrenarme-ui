import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H5 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H5>Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with large size', () => {
  const { container } = render(<H5 size="large">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with small size', () => {
  const { container } = render(<H5 size="small">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H5 color="warning">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with text align', () => {
  const { container } = render(<H5 textAlign="center">Heading</H5>);
  expect(container.firstChild).toMatchSnapshot();
});
