// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Switch from './index';
import Button from '../Button';
import example from './example';
import Checkbox from '../Checkbox';

storiesOf('Switch', module)
  .add(
    'default',
    () => (
      <Switch onChange={action('onSwitchChange')}>
        {({ itemProps, activeItem }) => (
          <React.Fragment>
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
      </Switch>
    ),
    {
      info: example,
    },
  )
  .add(
    'multiple',
    () => (
      <Switch onChange={action('onSwitchChange')} multiple>
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
      </Switch>
    ),
    {
      info: example,
    },
  )
  .add(
    'multiple with checkbox',
    () => (
      <Switch onChange={action('onSwitchChange')} multiple>
        {({ itemProps, activeItem }) => (
          <React.Fragment>
            <Checkbox
              name="male"
              value="male"
              checked={activeItem.includes('male')}
              {...itemProps()}
            />
            <Checkbox
              name="female"
              value="female"
              checked={activeItem.includes('female')}
              {...itemProps()}
            />
          </React.Fragment>
        )}
      </Switch>
    ),
    {
      info: example,
    },
  );
