// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAlarmClock,
  faAmbulance,
  faAddressBook,
} from '@fortawesome/pro-light-svg-icons';

import InfoText from './index';

storiesOf('Alerts/Info text', module).add(
  'success type',
  withInfo('success type')(() => (
    <InfoText
      text="success text"
      icon={<FontAwesomeIcon icon={faAlarmClock} />}
      type="success"
    />
  )),
);

storiesOf('Alerts/Info text', module).add(
  'error type',
  withInfo('error type')(() => (
    <InfoText
      text="error text"
      icon={<FontAwesomeIcon icon={faAmbulance} />}
      type="error"
    />
  )),
);

storiesOf('Alerts/Info text', module).add(
  'warning type',
  withInfo('warning type')(() => (
    <InfoText
      text="warning text"
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      type="warning"
    />
  )),
);
