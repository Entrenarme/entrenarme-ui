// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchableSwitch from './index';
import Checkbox from '../../core/Checkbox';
import Radio from '../../core/Radio';

const actions = {
  onChange: action('onChange'),
};

const options = ['wifi', 'piscina', 'masajista'];

storiesOf('SearchableSwitch', module)
  .add('renders checkbox multiple', () => (
    <SearchableSwitch column multiple {...actions}>
      {({ filterValue }) =>
        options
          .filter(option => option.includes(filterValue))
          .map(option => (
            <SearchableSwitch.Item key={option}>
              {({ itemProps, activeItem }) => (
                <Checkbox
                  name={option}
                  label={option}
                  {...itemProps()}
                  checked={activeItem.includes(option)}
                />
              )}
            </SearchableSwitch.Item>
          ))
      }
    </SearchableSwitch>
  ))
  .add('renders radio', () => (
    <SearchableSwitch column {...actions}>
      {({ filterValue }) =>
        options
          .filter(option => option.includes(filterValue))
          .map(option => (
            <SearchableSwitch.Item key={option}>
              {({ itemProps, activeItem }) => (
                <Radio
                  name={option}
                  label={option}
                  {...itemProps()}
                  checked={activeItem === option}
                />
              )}
            </SearchableSwitch.Item>
          ))
      }
    </SearchableSwitch>
  ));
