import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Scoring from './index';

test('renders "Scoring" with no props', () => {
  const { container } = render(<Scoring>Paragraph</Scoring>);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Scoring" with score of 3', () => {
  const { container } = render(<Scoring score={3}>Paragraph</Scoring>);
  expect(container.firstChild).toMatchSnapshot();
});
