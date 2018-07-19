import * as React from 'react';
import { render, getByText } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlarmClock } from '@fortawesome/free-solid-svg-icons';

import AlertBox from './index';

const title = 'title test example';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nulla a consectetur porta. In massa lacus, condimentum a turpis at, rutrum suscipit metus. Morbi sit amet odio eget tortor bibendum pulvinar. Proin varius ac leo eu bibendum. Etiam eu lectus non nibh gravida mollis.';

const { container } = render(
  <AlertBox
    icon={<FontAwesomeIcon icon={faAlarmClock} />}
    title={title}
    text={content}
  />,
);

test('renders "AlertBox"', () => {
  expect(container.firstChild).toMatchSnapshot();
});
