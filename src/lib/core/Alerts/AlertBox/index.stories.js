// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faTimes } from '@fortawesome/free-solid-svg-icons';

import colors from '../../../helpers/colors';

import AlertBox from './index';

import Button from '../../Button/index';

import FilterTag from '../../FilterTag/index';

const actions = {
  onClick: action('onClick'),
};

const title = 'title test example';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet nulla a consectetur porta. In massa lacus, condimentum a turpis at, rutrum suscipit metus. Morbi sit amet odio eget tortor bibendum pulvinar. Proin varius ac leo eu bibendum. Etiam eu lectus non nibh gravida mollis.';

const Tags = [
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
  <FilterTag
    title="Test"
    callback={() => console.log('hola')}
    rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
  />,
];

storiesOf('Alerts/Alert box', module).add(
  'default',
  withInfo('default')(() => (
    <AlertBox
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      title={title}
      text={content}
    />
  )),
);

storiesOf('Alerts/Alert box', module).add(
  'with button',
  withInfo('with button')(() => (
    <AlertBox
      {...actions}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      title={title}
      text={content}
      button={<Button>Test</Button>}
    />
  )),
);

storiesOf('Alerts/Alert box', module).add(
  'with button and warning',
  withInfo('with button and warning')(() => (
    <AlertBox
      {...actions}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      title={title}
      text={content}
      button={<Button>Test</Button>}
      type="warning"
    />
  )),
);

storiesOf('Alerts/Alert box', module).add(
  'with tags',
  withInfo('with tags')(() => (
    <AlertBox
      {...actions}
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      title={title}
      text={content}
      tags={Tags}
    />
  )),
);
