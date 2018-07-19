import * as React from 'react';
import { render, getByText } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import FilterTag from './index';

test('renders "FilterTag" with title and callback', () => {
  const { container } = render(<FilterTag title="test" callback={() => {}} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('text should be the same', () => {
  const { container } = render(<FilterTag title="Hola" callback={() => {}} />);

  getByText(container, 'Hola');
});
