// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/pro-light-svg-icons';

import colors from '../../helpers/colors';

import FilterTag from './index';

const actions = {
  onClick: action('onClick'),
};

const ElementDecoration = storyFn => (
  <div style={{ backgroundColor: '#F1F1F1', height: '100vh', padding: '20px' }}>
    {storyFn()}
  </div>
);

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'default',
    withInfo('Filter tag')(() => (
      <FilterTag
        {...actions}
        title="Test"
        callback={() => console.log('hola')}
      />
    )),
  );

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'with addCallback',
    withInfo('Filter tag')(() => (
      <FilterTag
        title="Test"
        callback={() => console.log('hola')}
        {...actions}
        leftIcon={<FontAwesomeIcon icon={faPlus} color={colors.text} />}
      />
    )),
  );

storiesOf('FilterTag', module)
  .addDecorator(ElementDecoration)
  .add(
    'with removeCallback',
    withInfo('Filter tag')(() => (
      <FilterTag
        title="Test"
        callback={() => console.log('hola')}
        {...actions}
        rightIcon={<FontAwesomeIcon icon={faTimes} color={colors.text} />}
      />
    )),
  );
