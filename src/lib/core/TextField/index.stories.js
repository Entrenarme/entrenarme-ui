// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import TextField from './index';
import colors from '../../helpers/colors';

const actions = {
  onChange: action('onChange'),
};

storiesOf('TextField', module)
  .add('default', () => <TextField {...actions} />)
  .add('with placeholder', () => (
    <TextField {...actions} placeholder="Search" />
  ))
  .add('with adornment at the start', () => (
    <TextField
      {...actions}
      adornment={
        <FontAwesomeIcon icon={faSearch} color={colors.gray.placeholder} />
      }
    />
  ))
  .add('with debounce', () => <TextField {...actions} debounceMs={400} />)
  .add('with all together', () => (
    <TextField
      {...actions}
      placeholder="Search"
      debounceMs={400}
      adornment={
        <FontAwesomeIcon icon={faSearch} color={colors.gray.placeholder} />
      }
    />
  ));
