// @flow
import * as React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  options: { placeholderWidth: string },
};

const Container = styled.div`
  ${(props: ContainerProps) =>
    `width: ${props.options.placeholderWidth}; flex: 1 0 ${
      props.options.placeholderWidth
    } `};
`;

type Props = {
  placeholderWidth: string,
};

class Placeholder extends React.Component<Props> {
  render() {
    const { placeholderWidth } = this.props;
    return <Container options={{ placeholderWidth }}>placeholder</Container>;
  }
}

export default Placeholder;
