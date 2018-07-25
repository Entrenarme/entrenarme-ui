// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';

const Container = styled.div`
  background-color: ${colors.gray.light};
  width: 130px;
  height: 70px;
`;

type Props = {
  topText: React.Node,
  bottomText: React.Node,
  amount: number,
  currency: string,
};

const RatesAdv = ({ topText, bottomText, amount, currency }: Props) => (
  <Container />
);

export default RatesAdv;
