import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import ToggleButtons from './index';

test('renders "ToggleButtons" with default config', () => {
  const { container } = render(
    <ToggleButtons
      leftText="Test left"
      rightText="Test right"
      leftIcon={<FontAwesomeIcon icon={faCoffee} />}
      rightIcon={<FontAwesomeIcon icon={faCoffee} />}
      leftOnclick={() => console.log('click left')}
      rightOnclick={() => console.log('click right')}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
