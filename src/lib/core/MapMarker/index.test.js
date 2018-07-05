import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import MapMarker from './index';

test('renders "MapMarker" with no props', () => {
  const { container } = render(<MapMarker />);
  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Map Marker" with type center', () => {
  const { container } = render(<MapMarker type="center" />);

  expect(container.firstChild).toMatchSnapshot();
});

test('renders "Map Marker" with type center and visited', () => {
  const { container } = render(<MapMarker type="center" visited />);

  expect(container.firstChild).toMatchSnapshot();
});
