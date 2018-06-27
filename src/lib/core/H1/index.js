// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../helpers/fonts';

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 700;
  font-family: ${fonts.mainFont};
`;

type Props = {
  children: React.Node,
};

const H1 = ({ children, ...rest }: Props) => (
  <StyledH1 {...rest}>{children}</StyledH1>
);

H1.defaultProps = {};

export default H1;
