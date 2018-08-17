// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DropdownSelect from './index';

const actions = {
  onChange: action('onClose'),
};

storiesOf('Dropdown Select', module).add('default', () => (
  <div style={{ width: '350px' }}>
    <DropdownSelect
      {...actions}
      inputTitle="Horario"
      items={[
        { name: 'Lunes', value: 0 },
        { name: 'Martes', value: 1 },
        { name: 'Miércoles', value: 2 },
        { name: 'Jueves', value: 3 },
        { name: 'Viernes', value: 4 },
        { name: 'Sábado', value: 5 },
        { name: 'Domingo', value: 6 },
      ]}
    />
  </div>
));
