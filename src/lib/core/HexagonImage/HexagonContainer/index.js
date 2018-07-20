// @flow
import * as React from 'react';
import styled from 'styled-components';

import Responsive from '../../../helpers/Responsive';
import Slider from '../../Slider/index';

const MainContainer = styled.div`
  display: flex;

  > div {
    margin-right: 30px;
  }

  div:last-child {
    margin-right: 0px;
  }
`;

type Props = {
  children: React.Node,
};

const HexagonContainer = ({ children }: Props) => {
  return (
    <Responsive>
      {({ device }) => {
        if (device === 'iphone') {
          return (
            <Slider itemsToShow={1} disableDots invertedArrows>
              {React.Children.map(children, child => <div>{child}</div>)}
            </Slider>
          );
        }

        return <MainContainer>{children}</MainContainer>;
      }}
    </Responsive>
  );
};

export default HexagonContainer;
