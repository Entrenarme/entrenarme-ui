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

const SArrow = styled.div``;

const Container = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 58px;
  display: flex;
  align-items: center;
  ${(props: ArrowProps) =>
    props.options && props.options.right ? 'right: 0' : 'left: 0'};
  ${(props: ArrowProps) =>
    props.options && !props.options.rounded
      ? 'justify-content: center'
      : props.options.right
        ? 'justify-content: flex-start'
        : 'justify-content: flex-end'};
`;

const Arrow = ({ right, component, onClick, rounded }: Props) => (
  <Container onClick={onClick} options={{ right, rounded }}>
    <SArrow options={{ rounded }}>
      {component || <DefaultArrow rounded={rounded} right={right} />}
    </SArrow>
  </Container>
);

Arrow.defaultProps = {
  rounded: false,
  right: false,
};

export default Arrow;
