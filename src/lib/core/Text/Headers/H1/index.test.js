import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import H1 from './index';

test('renders "Heading" with no props', () => {
  const { container } = render(<H1>Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with large size', () => {
  const { container } = render(<H1 size="large">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with small size', () => {
  const { container } = render(<H1 size="small">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with color prop', () => {
  const { container } = render(<H1 color="warning">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with text align', () => {
  const { container } = render(<H1 textAlign="center">Heading</H1>);
  expect(container.firstChild).toMatchSnapshot();
});
