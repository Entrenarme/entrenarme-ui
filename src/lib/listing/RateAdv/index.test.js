import * as React from 'react';
import { render } from 'react-testing-library';

import RateAdv from './index';

test('renders button if appendButtonText', () => {
  const { getByTestId } = render(<RateAdv appendButtonText="button text" />);

  const button = getByTestId('appended-button');

  expect(button).toBeTruthy();
  expect(button.nodeName).toBe('BUTTON');
});

test('dont renders button if NO appendButtonText', () => {
  const { queryByTestId } = render(<RateAdv />);

  const button = queryByTestId('appended-button');

  expect(button).toBeNull();
});

test('renders the expected props', () => {
  const { container } = render(
    <RateAdv
      currency="€"
      amount={12}
      topText="desde"
      bottomText="persona/sesión"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
