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
  'data-testid': string,
};

class Placeholder extends React.Component<Props> {
  static defaultProps = {
    placeholderChildren: null,
    'data-testid': null,
  };
  render() {
    const {
      placeholderWidth,
      placeholderBackground,
      placeholderChildren,
      ...rest
    } = this.props;
    return (
      <Container
        options={{ placeholderWidth, placeholderBackground }}
        {...rest}
      >
        {placeholderChildren}
      </Container>
    );
  }
}

export default Placeholder;
