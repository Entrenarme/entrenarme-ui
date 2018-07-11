import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import FilterTag from './index';

test('renders "FilterTag" with title', () => {
  const { container } = render(<FilterTag title="test" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "FilterTag" with title and addCallback', () => {
  const { container } = render(
    <FilterTag title="test" addCallback={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "FilterTag" with title and removeCallback', () => {
  const { container } = render(
    <FilterTag title="test" removeCallback={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "FilterTag" with all options', () => {
  const { container } = render(
    <FilterTag title="test" addCallback={() => {}} removeCallback={() => {}} />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
