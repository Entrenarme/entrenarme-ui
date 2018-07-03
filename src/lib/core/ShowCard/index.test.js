import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import ShowCard from './index';

test('renders "Heading" with title', () => {
  const { container } = render(<ShowCard title="Mis cosas">Heading</ShowCard>);

  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Heading" with no props', () => {
  const { container } = render(<ShowCard>Heading</ShowCard>);

  expect(container.firstChild).toMatchSnapshot();
});
