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
  placeholderWidth: string,
  imageWidth: string,
  imageHeight: string,
  trainerName: string,
  offsetWidth: number,
  transition: boolean,
  lazyload: boolean,
  _images: Array<CustomImage>,
  visibleImages: ?number,
  loadMoreImages: Function,
  onMediaClick: Function,
  trainerName: string,
  swiping: boolean,
  placeholderBackground: string,
  placeholderChildren: React.Node,
  loadLastTwoImages: boolean,
  prepareForInfinite: Function,
  initialLoading: boolean,
  infinite: boolean,
  imageClassName: string,
};

const showPlaceholder = (
  index,
  visibleImages,
  lazyload,
  loadLastTwoImages,
  _images,
  initialLoading,
  infinite,
) => {
  if (lazyload) {
    // if (loadLastTwoImages && index >= _images.length - 2) {
    //   return false;
    // }
    if (infinite && !initialLoading && index >= _images.length - 2) {
      return false;
    }
    if (visibleImages <= index) {
      return true;
    }
  }
  return false;
};

class Gallery extends React.Component<Props> {
  static defaultProps = {
    onMediaClick: null,
    trainerName: '',
    placeholderBackground: '',
    placeholderChildren: null,
    imageClassName: '',
  };

  onMediaClick = (src: string) => () => {
    if (this.props.onMediaClick && !this.props.swiping) {
      this.props.onMediaClick(src);
    } else {
      return null;
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
      trainerName,
      swiping,
      placeholderBackground,
      placeholderChildren,
      loadLastTwoImages,
      prepareForInfinite,
      initialLoading,
      infinite,
      imageClassName,
    } = this.props;
    return visibleImages ? (
      <SGallery options={{ offsetWidth, transition }} id="gallery_container">
        {_images.map(
          (image, index: number) =>
            showPlaceholder(
              index,
              visibleImages,
              lazyload,
              loadLastTwoImages,
              _images,
              initialLoading,
              infinite,
            ) ? (
              <Placeholder
                placeholderWidth={placeholderWidth}
                key={image.keyId || image.id}
                placeholderBackground={placeholderBackground}
                placeholderChildren={placeholderChildren}
                data-testid={initialLoading ? 'initialLoading' : null}
              />
            ) : image.type === 'video' ? (
              <div
                className="media"
                key={image.keyId || image.id}
                style={{
                  width: `${placeholderWidth}px`,
                  height: `${imageHeight}px`,
                }}
              >
                <Player
                  url={image.value}
                  onReady={
                    loadLastTwoImages && index === _images.length - 1
                      ? prepareForInfinite
                      : loadMoreImages
                  }
                  height={imageHeight}
                  width={placeholderWidth}
                  controls
                />
              </div>
            ) : (
              <Image
                type="gallery"
                onClick={
                  this.props.onMediaClick
                    ? this.onMediaClick(image.value)
                    : null
                }
                allowOpen={!swiping}
                key={image.keyId || image.id}
                className={`media ${imageClassName}`}
                image={image}
                alt={`${trainerName} ${image.sport_name}`}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                onLoad={
                  loadLastTwoImages && index === _images.length - 1
                    ? prepareForInfinite
                    : loadMoreImages
                }
              />
            ),
        )}
      </SGallery>
    ) : null;
  }
}

export default Gallery;
