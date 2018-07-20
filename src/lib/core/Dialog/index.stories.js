// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dialog from './index';
import H4 from '../Text/Headers/H4/index';
import P from '../Text/Paragraph/index';
import Button from '../Button/index';
import TextField from '../TextField/index';

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
    body={
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    }
  />
));

storiesOf('Dialog', module).add('default with buttons', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body={
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    }
    footer={
      <div>
        <Button>Test 1</Button>
        <Button>Test 2</Button>
      </div>
    }
  />
));

storiesOf('Dialog', module).add('default with buttons and inputs', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body={
      <div>
        <div>
          <TextField placeholder="nombre" fullWidth />
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField placeholder="apellidos" fullWidth />
        </div>
        <div style={{ marginTop: '20px' }}>
          <TextField placeholder="ciudad" fullWidth />
        </div>
      </div>
    }
    footer={
      <div>
        <Button>Test 1</Button>
        <Button>Test 2</Button>
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
    body={
      <div>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
      </div>
    }
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
    body={
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    }
    footer={<Button>Test</Button>}
    type="small"
  />
));

storiesOf('Dialog', module).add('small with two buttons', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body={
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    }
    footer={
      <div>
        <Button>Test 1</Button>
        <Button>Test 2</Button>
      </div>
    }
    type="small"
  />
));

storiesOf('Dialog', module).add('with centered content', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body={
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    }
    footer={<Button>Test</Button>}
    align="center"
  />
));

storiesOf('Dialog', module).add('without header', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    body={
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
        magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut
        rhoncus magna euismod et. Donec condimentum congue sapien, nec auctor
        eros sagittis eget.
      </P>
    }
    footer={<Button>Test</Button>}
  />
));

storiesOf('Dialog', module).add('overflow content', () => (
  <Dialog
    {...actions}
    open={true}
    onClose={() => (openDialog = false)}
    header={<H4>TEST</H4>}
    body={
      <div>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
      </div>
    }
    footer={<Button>Test</Button>}
    type="large"
  />
));
