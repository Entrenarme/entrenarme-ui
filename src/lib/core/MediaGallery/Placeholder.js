// @flow
import * as React from 'react';
import styled from 'styled-components';

type ContainerProps = {
  options: { placeholderWidth: string, placeholderBackground: string },
};

const Container = styled.div`
  ${(props: ContainerProps) =>
    `width: ${props.options.placeholderWidth}; flex: 1 0 ${
      props.options.placeholderWidth
    } `};
  background-image: ${(props: ContainerProps) =>
    `url(${props.options.placeholderBackground})`};
`;

type Props = {
  placeholderWidth: string,
  placeholderBackground: string,
  placeholderChildren: React.Node,
};

class Placeholder extends React.Component<Props> {
  static defaultProps = {
    placeholderChildren: null,
  };
  render() {
    const {
      placeholderWidth,
      placeholderBackground,
      placeholderChildren,
    } = this.props;
    return (
      <Container options={{ placeholderWidth, placeholderBackground }}>
        {placeholderChildren}
      </Container>
    );
  }
}

export default Placeholder;
