import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import P from './index';

test('renders "Paragraph" with no props', () => {
  const { container } = render(<P>Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Paragraph" with large size', () => {
  const { container } = render(<P size="large">Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Paragraph" with small size', () => {
  const { container } = render(<P size="small">Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Paragraph" with align center', () => {
  const { container } = render(<P textAlign="center">Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});
