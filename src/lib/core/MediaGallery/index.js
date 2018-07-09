// @flow
import * as React from 'react';
import styled from 'styled-components';
import invariant from 'invariant';

import Image from '../Image';
import Placeholder from './Placeholder';

type Props = {
  images: Array<CustomImage>,
  lazyload?: boolean,
  visibleImages?: ?number,
  placeholderWidth?: string,
  imageWidth?: string,
  imageHeight?: string,
  defaultArrows?: boolean,
};

type State = {
  visibleImages?: ?number,
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
`;

type ArrowProps = {
  options: { right: boolean },
};

const Arrow = styled.div`
  position: absolute;
  top: 40%;
  ${(props: ArrowProps) =>
    props.options && props.options.right ? 'right: 0' : 'left: 0'};
`;

const checkPropErrors = ({ lazyload, visibleImages }) => {
  const isError = lazyload && visibleImages === null;
  invariant(
    !isError,
    'If you pass a lazyload prop, you should pass a visibleImages number too',
  );
};

class MediaGallery extends React.Component<Props, State> {
  static defaultProps = {
    lazyload: false,
    visibleImages: null,
    placeholderWidth: '',
    defaultArrows: false,
    imageWidth: '',
    imageHeight: '',
  };

  state = {
    visibleImages: this.props.visibleImages || null,
  };

  componentDidMount() {
    const { lazyload, visibleImages } = this.props;
    checkPropErrors({ lazyload, visibleImages });
    setTimeout(
      () =>
        this.setState(prevState => ({
          visibleImages: prevState.visibleImages + 1,
        })),
      2000,
    );
  }

  render() {
    const {
      images,
      lazyload,
      placeholderWidth,
      defaultArrows,
      imageWidth,
      imageHeight,
    } = this.props;
    const { visibleImages } = this.state;
    return (
      <Container>
        {defaultArrows ? <Arrow>lefT!!</Arrow> : null}
        {images.map(
          (image, index: number) =>
            lazyload && visibleImages !== null && index >= visibleImages ? (
              <Placeholder placeholderWidth={placeholderWidth} key={image.key}>
                placeholder
              </Placeholder>
            ) : (
              <Image
                key={image.key || image.src}
                image={image}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
              />
            ),
        )}
        {defaultArrows ? (
          <Arrow options={{ right: true }}>right!!</Arrow>
        ) : null}
      </Container>
    );
  }
}

export default MediaGallery;
