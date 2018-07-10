// @flow
import * as React from 'react';
import styled from 'styled-components';

import Image from '../Image';
import Placeholder from './Placeholder';

type GalleryProps = {
  options: { offsetWidth: number, transition: boolean },
};

const SGallery = styled.div`
  display: flex;
  ${(props: GalleryProps) =>
    props.options.transition ? 'transition: transform 0.3s ease-in-out' : ''};
  transform: translate3d(
    ${(props: GalleryProps) => props.options.offsetWidth}px,
    0,
    0
  );
`;

type Props = {
  offsetWidth: number,
  transition: boolean,
  lazyload: boolean,
  _images: Array<CustomImage>,
  visibleImages: ?number,
  placeholderWidth: string,
  imageWidth: string,
  imageHeight: string,
};

class Gallery extends React.Component<Props> {
  render() {
    const {
      offsetWidth,
      transition,
      lazyload,
      _images,
      visibleImages,
      placeholderWidth,
      imageWidth,
      imageHeight,
    } = this.props;
    return (
      <SGallery options={{ offsetWidth, transition }}>
        {_images.map(
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
      </SGallery>
    );
  }
}

export default Gallery;
