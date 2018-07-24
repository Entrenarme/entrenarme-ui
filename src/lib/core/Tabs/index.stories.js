// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { RESOURCES_URL } from '../../helpers/config';

import SwitchTab from './index';

const imageURLTest = 'xB1sQl1TuP0yFj7qn8gb_sebas-b.jpg';

storiesOf('Tabs', module).add('text tabs', () => (
  <SwitchTab>
    <div>
      <p>Tab 1</p>
      <p>Tab 2</p>
      <p>Tab 3</p>
    </div>
    <div>
      <p>bla1</p>
      <div>
        <p>bla2</p>
      </div>
      <p>bla3</p>
    </div>
  </SwitchTab>
));

storiesOf('Tabs', module).add('image tabs', () => (
  <SwitchTab>
    <div>
      <img
        src={`${RESOURCES_URL}profile/150/${imageURLTest}`}
        style={{ width: '50px', height: '50px', borderRadius: '50px' }}
        alt="profile"
      />
      <img
        src={`${RESOURCES_URL}profile/150/${imageURLTest}`}
        style={{ width: '50px', height: '50px', borderRadius: '50px' }}
        alt="profile"
      />
      <img
        src={`${RESOURCES_URL}profile/150/${imageURLTest}`}
        style={{ width: '50px', height: '50px', borderRadius: '50px' }}
        alt="profile"
      />
    </div>
    <div>
      <p>bla1</p>
      <div>
        <p>bla2</p>
      </div>
      <p>bla3</p>
    </div>
  </SwitchTab>
));
