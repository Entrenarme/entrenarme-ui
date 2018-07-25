import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import SwitchTab from './index';

test('renders "Paragraph" with no props', () => {
  const { container } = render(
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
    </SwitchTab>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
