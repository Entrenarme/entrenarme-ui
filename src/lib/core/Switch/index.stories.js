// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Switch from './index';
import Button from '../Button';

storiesOf('Switch', module).add(
  'default',
  withInfo('Switch')(() => (
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
  )),
);
