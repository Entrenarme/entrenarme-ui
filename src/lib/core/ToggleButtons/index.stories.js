// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import ToggleButtons from './index';

storiesOf('ToggleButtons', module).add(
  'Toggle buttons with icon',
  withInfo('ToggleButtons')(() => (
    <ToggleButtons
      leftText="Ver listado"
      rightText="Filtrar"
      leftIcon={<FontAwesomeIcon icon={faCoffee} />}
      rightIcon={<FontAwesomeIcon icon={faCoffee} />}
      leftOnclick={() => console.log('click left')}
      rightOnclick={() => console.log('click right')}
    />
  )),
);
