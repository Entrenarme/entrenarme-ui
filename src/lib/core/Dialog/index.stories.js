// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Dialog from './index';

let openDialog = false;

storiesOf('Dialog', module).add('default', () => (
  <div>
    <button
      onClick={() => {
        openDialog = !openDialog;
      }}
    >
      Open dialog
    </button>
    <Dialog open={true} onClose={() => (openDialog = false)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum
      magna eu velit semper hendrerit. Aenean aliquet pretium justo, ut rhoncus
      magna euismod et. Donec condimentum congue sapien, nec auctor eros
      sagittis eget.
    </Dialog>
  </div>
));
