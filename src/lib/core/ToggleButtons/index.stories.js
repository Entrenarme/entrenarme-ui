// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import ToggleButtons from './index';

const actions = {
  onClick: action('onClick'),
};

storiesOf('ToggleButtons', module).add(
  'Toggle buttons with icon',
  withInfo('ToggleButtons')(() => (
    <ToggleButtons
      {...actions}
      leftText="Ver listado"
      rightText="Filtrar"
      leftIcon={<FontAwesomeIcon icon={faCoffee} />}
      rightIcon={<FontAwesomeIcon icon={faCoffee} />}
      leftOnclick={() => action('onClick')}
      rightOnclick={() => action('onClick')}
    />
  )),
);
