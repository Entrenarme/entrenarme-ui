import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Button from './index';

test('renders default with no props', () => {
  const { container } = render(<Button>default</Button>);
  expect(container.firstChild).toMatchSnapshot();
});
