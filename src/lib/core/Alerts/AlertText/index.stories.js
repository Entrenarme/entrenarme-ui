// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/pro-light-svg-icons';

import AlertText from './index';

const actions = {
  onClick: action('onClick'),
};

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nulla a consectetur porta. In massa lacus, condimentum a turpis at, rutrum suscipit metus. Morbi sit amet odio eget tortor bibendum pulvinar. Proin varius ac leo eu bibendum. Etiam eu lectus non nibh gravida mollis.';

storiesOf('Alerts/Alert text', module).add(
  'default',
  withInfo('default')(() => (
    <AlertText text={content} icon={<FontAwesomeIcon icon={faAddressBook} />} />
  )),
);

storiesOf('Alerts/Alert text', module).add(
  'with canClose',
  withInfo('with canClose')(() => (
    <AlertText
      {...actions}
      text={content}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      canClose
    />
  )),
);

storiesOf('Alerts/Alert text', module).add(
  'with link and canClose',
  withInfo('with link and canClose')(() => (
    <AlertText
      {...actions}
      text={content}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      link={
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mas info
        </a>
      }
      canClose
    />
  )),
);

storiesOf('Alerts/Alert text', module).add(
  'warning type',
  withInfo('warning type')(() => (
    <AlertText
      {...actions}
      text={content}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      type="warning"
      canClose
    />
  )),
);

storiesOf('Alerts/Alert text', module).add(
  'danger type',
  withInfo('danger type')(() => (
    <AlertText
      {...actions}
      text={content}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      type="error"
      canClose
    />
  )),
);
