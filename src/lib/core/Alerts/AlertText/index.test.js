import * as React from 'react';
import { render, getByText } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlarmClock } from '@fortawesome/pro-light-svg-icons';

import AlertText from './index';

const text = 'Test text';

const { container } = render(
  <AlertText text={text} icon={<FontAwesomeIcon icon={faAlarmClock} />} />,
);

test('renders "AlertText"', () => {
  expect(container.firstChild).toMatchSnapshot();
});
