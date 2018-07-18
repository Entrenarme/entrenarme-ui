// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dialog from './index';
import H4 from '../Text/Headers/H4/index';
import Button from '../Button/index';

let openDialog = false;

const actions = {
  onClick: action('onClick'),
};

storiesOf('Dialog', module).add('default', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget."
    footer={
      <div>
        <Button>Test</Button>
        <Button>Test</Button>
      </div>
    }
  />
));

storiesOf('Dialog', module).add('large', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget."
    footer={<Button>Test</Button>}
    type="large"
  />
));

storiesOf('Dialog', module).add('small', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget."
    footer={<Button>Test</Button>}
    type="small"
  />
));

storiesOf('Dialog', module).add('with centered content', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget."
    footer={<Button>Test</Button>}
    align="center"
  />
));

storiesOf('Dialog', module).add('without header', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget."
    footer={<Button>Test</Button>}
  />
));
