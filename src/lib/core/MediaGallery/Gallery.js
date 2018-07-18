// @flow
import * as React from 'react';
import styled from 'styled-components';
import Player from 'react-player';

import Image from '../Image';
import Placeholder from './Placeholder';

type GalleryProps = {
  options: { offsetWidth: number, transition: boolean },
};

const SGallery = styled.div`
  display: flex;
  position: relative;
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
  loadMoreImages: Function,
  initialLoad: boolean,
  onMediaClick: Function,
};

class Gallery extends React.Component<Props> {
  static defaultProps = {
    onMediaClick: null,
  };

  onMediaClick = (src: string) => () => {
    if (this.props.onMediaClick) {
      this.props.onMediaClick(src);
    }
  };

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
      loadMoreImages,
      onMediaClick,
    } = this.props;
    return (
      <SGallery options={{ offsetWidth, transition }} id="gallery_container">
        {_images.map(
          (image, index: number) =>
            lazyload &&
            visibleImages !== null &&
            index >= visibleImages &&
            index < _images.length - 2 ? (
              <Placeholder placeholderWidth={placeholderWidth} key={image.key}>
                placeholder
              </Placeholder>
            ) : image.value ? (
              <Player
                className="media"
                key={image.key}
                url={image.value}
                height={200}
                width={300}
                style={{ width: '300px', height: '200px' }}
                controls
              />
            ) : (
              <Image
                onClick={this.onMediaClick(image.src)}
                key={image.key || image.src}
                className="media"
                image={image}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                onLoad={loadMoreImages}
              />
            ),
        )}
      </SGallery>
    );
  }
}

export default Gallery;
