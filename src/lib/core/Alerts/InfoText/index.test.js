import * as React from 'react';
import { render, getByText } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlarmClock } from '@fortawesome/free-solid-svg-icons';

import InfoText from './index';

const text = 'Test text';

test('renders "InfoText"', () => {
  const { container } = render(
    <InfoText
      text={text}
      icon={<FontAwesomeIcon icon={faAlarmClock} />}
      type="success"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

test('renders "InfoText" and check text', () => {
  const { container } = render(
    <InfoText
      text={text}
      icon={<FontAwesomeIcon icon={faAlarmClock} />}
      type="success"
    />,
  );

  getByText(container, text);
});
