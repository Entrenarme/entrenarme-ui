// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Select from './index';
import Button from '../Button';
import example from './example';

storiesOf('Select', module)
  .add(
    'default',
    () => (
      <Select onChange={action('onSwitchChange')}>
        {({ itemProps, activeItem }) => (
          <React.Fragment>
            {console.log(activeItem, itemProps)}
            <Button
              name="male"
              type="outline"
              colorVariant={activeItem === 'male' ? 'secondary' : 'primary'}
              {...itemProps()}
            >
              no icon
            </Button>
            <Button
              name="female"
              type="outline"
              icon={<FontAwesomeIcon icon={faCoffee} />}
              colorVariant={activeItem === 'female' ? 'secondary' : 'primary'}
              {...itemProps()}
            >
              with icon
            </Button>
          </React.Fragment>
        )}
      </Select>
    ),
    {
      info: example,
    },
  )
  .add(
    'multiple',
    () => (
      <Select onChange={action('onSwitchChange')} multiple>
        {({ itemProps, activeItem }) => (
          <React.Fragment>
            <Button
              name="male"
              type="outline"
              colorVariant={
                activeItem.includes('male') ? 'secondary' : 'primary'
              }
              {...itemProps()}
            >
              no icon
            </Button>
            <Button
              name="female"
              type="outline"
              icon={<FontAwesomeIcon icon={faCoffee} />}
              colorVariant={
                activeItem.includes('female') ? 'secondary' : 'primary'
              }
              {...itemProps()}
            >
              with icon
            </Button>
          </React.Fragment>
        )}
      </Select>
    ),
    {
      info: example,
    },
  );
