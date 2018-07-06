import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Tag from './index';

test('renders "Tag" with title', () => {
  const { container } = render(<Tag title="Test" />);

  expect(container.firstChild).toMatchSnapshot();
});
