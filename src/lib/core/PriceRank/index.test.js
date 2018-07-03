import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import PriceRank from './index';

test('renders price rank', () => {
  const { container } = render(<PriceRank currency="$" callback={() => {}} />);

  expect(container.firstChild).toMatchSnapshot();
});
