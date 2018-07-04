// @flow
import * as React from 'react';
import styled from 'styled-components';

import Select from '../Select';

type ContainerProps = {
  options: {
    column: boolean,
  },
};

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props: ContainerProps) =>
    props.options.column ? '1fr' : '1fr 1fr'};
  grid-gap: 20px;
`;

type Props = {
  children: Function,
  column?: boolean,
};

const Switch = ({ children, column, ...rest }: Props) => (
  <Container options={{ column }}>
    <Select {...rest}>{children}</Select>
  </Container>
);

Switch.defaultProps = {
  column: false,
};

export default Switch;
