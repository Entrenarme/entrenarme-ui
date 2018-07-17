// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './index';

const imageURLTest =
  'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/08/coche-mas-pequeno-mundo.jpg?itok=l_wCfddv';

storiesOf('Avatar', module).add('default', () => <Avatar url={imageURLTest} />);

storiesOf('Avatar', module).add('header', () => (
  <Avatar url={imageURLTest} type="header" />
));

storiesOf('Avatar', module).add('profile', () => (
  <Avatar url={imageURLTest} type="profile" />
));

storiesOf('Avatar', module).add('without url', () => <Avatar />);

storiesOf('Avatar', module).add('header without url', () => (
  <Avatar type="header" />
));

storiesOf('Avatar', module).add('profile without url', () => (
  <Avatar type="profile" />
));
