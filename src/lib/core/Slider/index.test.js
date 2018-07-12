import * as React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import styled from 'styled-components';

import Slider from './index';

const MainCard = styled.div`
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
`;

const moreThan3 = [1, 2, 3, 4, 5];

test('renders "Slider" with 5 elements', () => {
  const { container } = render(
    <Slider itemsToShow={3}>
      {moreThan3.map(element => (
        <div key={element}>
          <MainCard>
            Number: {element}
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            fermentum magna eu velit semper hendrerit.
          </MainCard>
        </div>
      ))}
    </Slider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
