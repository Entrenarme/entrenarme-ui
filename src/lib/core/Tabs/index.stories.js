// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { RESOURCES_URL } from '../../helpers/config';

import SwitchTab from './index';

const imageURLTest = 'xB1sQl1TuP0yFj7qn8gb_sebas-b.jpg';

storiesOf('Tabs', module).add('text tabs', () => (
  <SwitchTab>
    <SwitchTab.TabList>
      <SwitchTab.Tab>Tab 1</SwitchTab.Tab>
      <SwitchTab.Tab>Tab 2</SwitchTab.Tab>
    </SwitchTab.TabList>
    <SwitchTab.TabPanels>
      <SwitchTab.TabPanel>bla 1</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 2</SwitchTab.TabPanel>
    </SwitchTab.TabPanels>
  </SwitchTab>
));

storiesOf('Tabs', module).add('text tabs with 5 tabs', () => (
  <SwitchTab>
    <SwitchTab.TabList>
      <SwitchTab.Tab>Tab 1</SwitchTab.Tab>
      <SwitchTab.Tab>Tab 2</SwitchTab.Tab>
      <SwitchTab.Tab>Tab 3</SwitchTab.Tab>
      <SwitchTab.Tab>Tab 4</SwitchTab.Tab>
      <SwitchTab.Tab>Tab 5</SwitchTab.Tab>
    </SwitchTab.TabList>
    <SwitchTab.TabPanels>
      <SwitchTab.TabPanel>bla 1</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 2</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 3</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 4</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 5</SwitchTab.TabPanel>
    </SwitchTab.TabPanels>
  </SwitchTab>
));

storiesOf('Tabs', module).add('image tabs', () => (
  <SwitchTab>
    <SwitchTab.TabList>
      <SwitchTab.Tab>
        <img
          src={`${RESOURCES_URL}profile/150/${imageURLTest}`}
          style={{ width: '50px', height: '50px', borderRadius: '50px' }}
          alt="profile"
        />
      </SwitchTab.Tab>
      <SwitchTab.Tab>
        <img
          src={`${RESOURCES_URL}profile/150/${imageURLTest}`}
          style={{ width: '50px', height: '50px', borderRadius: '50px' }}
          alt="profile"
        />
      </SwitchTab.Tab>
      <SwitchTab.Tab>
        <img
          src={`${RESOURCES_URL}profile/150/${imageURLTest}`}
          style={{ width: '50px', height: '50px', borderRadius: '50px' }}
          alt="profile"
        />
      </SwitchTab.Tab>
    </SwitchTab.TabList>
    <SwitchTab.TabPanels>
      <SwitchTab.TabPanel>bla 1</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 2</SwitchTab.TabPanel>
      <SwitchTab.TabPanel>bla 3</SwitchTab.TabPanel>
    </SwitchTab.TabPanels>
  </SwitchTab>
));