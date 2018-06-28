import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import P from './index';

test('renders "Paragraph" with no props', () => {
  const { container } = render(<P>Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Paragraph" with l prop', () => {
  const { container } = render(<P l>Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Paragraph" with s prop', () => {
  const { container } = render(<P s>Paragraph</P>);
  expect(container.firstChild).toMatchSnapshot();
});
