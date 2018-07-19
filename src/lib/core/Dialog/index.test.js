import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Dialog from './index';
import H4 from '../Text/Headers/H4/index';
import P from '../Text/Paragraph/index';

test('renders "Paragraph" with no props', () => {
  const { container } = render(
    <Dialog
      open={true}
      onClose={() => {}}
      header={<H4>TEST</H4>}
      body={
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum magna eu velit semper hendrerit. Aenean aliquet pretium
          justo, ut rhoncus magna euismod et. Donec condimentum congue sapien,
          nec auctor eros sagittis eget.
        </P>
      }
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});
