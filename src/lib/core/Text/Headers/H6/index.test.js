import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H6 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H6>Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with large size', () => {
  const { container } = render(<H6 size="large">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with small size', () => {
  const { container } = render(<H6 size="small">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H6 color="warning">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with text align', () => {
  const { container } = render(<H6 textAlign="center">Heading</H6>);
  expect(container.firstChild).toMatchSnapshot();
});
