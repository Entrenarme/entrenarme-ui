import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H3 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H3>Heading</H3>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with large size', () => {
  const { container } = render(<H3 size="large">Heading</H3>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with small size', () => {
  const { container } = render(<H3 size="small">Heading</H3>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H3 color="warning">Heading</H3>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with text align', () => {
  const { container } = render(<H3 textAlign="center">Heading</H3>);
  expect(container.firstChild).toMatchSnapshot();
});
