// @flow
import * as React from 'react';
import styled from 'styled-components';

import DefaultArrow from './DefaultArrow';

type Props = {
  right: boolean,
  component?: React.Node,
  onClick?: Function,
  rounded: boolean,
};

type ArrowProps = {
  options: { right: boolean, rounded: boolean },
};

const SArrow = styled.div`
  z-index: 10;
  position: absolute;
  top: ${(props: ArrowProps) =>
    props.options && props.options.rounded
      ? 'calc(50% - 20px)'
      : 'calc(50% - 8px)'};
  ${(props: ArrowProps) =>
    props.options && props.options.right ? 'right: 0' : 'left: 0'};
  ${(props: ArrowProps) =>
    props.options && props.options.right
      ? 'margin-right: 15px'
      : 'margin-left: 15px'};
  cursor: pointer;
`;

const Arrow = ({ right, component, onClick, rounded }: Props) => (
  <SArrow onClick={onClick} options={{ right, rounded }}>
    {component || <DefaultArrow rounded={rounded} right={right} />}
  </SArrow>
);

Arrow.defaultProps = {
  rounded: false,
  right: false,
};

export default Arrow;
