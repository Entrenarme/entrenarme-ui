// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  right?: boolean,
  component?: React.Node,
  onClick?: Function,
};

type ArrowProps = {
  options: { right: boolean },
};

const SArrow = styled.div`
  z-index: 10;
  position: absolute;
  top: 40%;
  ${(props: ArrowProps) =>
    props.options && props.options.right ? 'right: 0' : 'left: 0'};
`;

const Arrow = ({ right, component, onClick }: Props) => (
  <SArrow onClick={onClick} options={{ right }}>
    Arrow!
  </SArrow>
);

export default Arrow;
