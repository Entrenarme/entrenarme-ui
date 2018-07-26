import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Breadcrumb from './index';

test('renders "Breadcrumb" with no props', () => {
  const { container } = render(
    <Breadcrumb>
      <a>Link 1</a>
      <a>Link 2</a>
      <a>Link 3</a>
    </Breadcrumb>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
