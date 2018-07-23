// @flow
import * as React from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable';

import Arrow from './Arrow';
import Gallery from './Gallery';

import { getAllChildMedia, getNChildMedia, getLastChildMedia } from './helpers';

import {
  copyLastImageToStart,
  prepareImagesOnDOMForMoving,
  moveToNext,
  moveToPrev,
} from './moveUtils';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export type Props = {
  images: Array<CustomImage>,
  lazyload: boolean,
  infinite: boolean,
  offsetVisibleImages: number,
  children: React.Node,
};

export type State = {
  visibleImages: number,
  currentImage: number,
  offsetWidth: number,
  _images: Array<CustomImage>,
  transition: boolean,
  lazyload: boolean,
  copyImagesAndNoDOMVisibleChanges: Function,
  offsetVisibleImages: number,
  showArrows: boolean,
  totalOffsetWidth: number,
  offsetToRevealNextChild: number,
  direction: 'next' | 'prev' | null,
  infinite: boolean,
  allowNextMove: boolean,
};

type ArrowProps = {
  rounded?: boolean,
  component?: React.Node,
};

const MediaGalleryContext = React.createContext();

class MediaGallery extends React.Component<Props, State> {
  static LeftArrow = ({ rounded, component }: ArrowProps) => (
    <MediaGalleryContext.Consumer>
      {({
        copyImagesAndNoDOMVisibleChanges,
        showArrows,
        infinite,
        currentImage,
      }: State) =>
        !showArrows || (!infinite && currentImage === 0) ? null : (
          <Arrow
            rounded={rounded}
            component={component}
            onClick={() => copyImagesAndNoDOMVisibleChanges('prev')}
          />
        )
      }
    </MediaGalleryContext.Consumer>
  );

  static RightArrow = ({ rounded, component }: ArrowProps) => (
    <MediaGalleryContext.Consumer>
      {({
        copyImagesAndNoDOMVisibleChanges,
        showArrows,
        infinite,
        currentImage,
        _images,
        allowNextMove,
      }: State) =>
        !showArrows ||
        (!infinite && currentImage === _images.length - 1) ||
        !allowNextMove ? null : (
          <Arrow
            right
            rounded={rounded}
            component={component}
            onClick={() => copyImagesAndNoDOMVisibleChanges('next')}
          />
        )
      }
    </MediaGalleryContext.Consumer>
  );

  static Gallery = (props: {
    imageHeight: string,
    imageWidth: string,
    placeholderWidth: string,
  }) => (
    <MediaGalleryContext.Consumer>
      {({ copyImagesAndNoDOMVisibleChanges, ...rest }: State) => (
        <Gallery {...props} {...rest} />
      )}
    </MediaGalleryContext.Consumer>
  );

  static defaultProps = {
    lazyload: false,
    infinite: false,
    visibleImages: null,
    offsetVisibleImages: 3,
  };

  checkIfNeedToHideRightArrow = () => {
    const { _images, currentImage, allowNextMove } = this.state;
    const allChildMedia = getAllChildMedia(this.containerRef);
    if (allChildMedia && this.containerRef) {
      if (_images.length === allChildMedia.length) {
        const imagesLeftFromFirstVisible = [...allChildMedia].slice(
          currentImage,
        );
        const totalWidth = imagesLeftFromFirstVisible.reduce(
          (acc, image) => acc + image.clientWidth,
          0,
        );
        if (totalWidth < this.containerRef.clientWidth) {
          this.setState({ allowNextMove: false });
        } else if (!allowNextMove) {
          this.setState({ allowNextMove: true });
        }
      }
    }
  };

  copyImagesAndNoDOMVisibleChanges = (direction: 'next' | 'prev') => {
    this.setState(prepareImagesOnDOMForMoving(direction, this.containerRef));
  };

  loadMoreImages = () => {
    const { _images, offsetVisibleImages } = this.state;
    const allImages = getAllChildMedia(this.containerRef);
    if (allImages) {
      const totalWidth = [...allImages].reduce(
        (acc, image) => acc + image.clientWidth,
        0,
      );
      if (this.containerRef) {
        if (totalWidth < this.containerRef.clientWidth) {
          this.setState(prevState => ({
            visibleImages:
              prevState.visibleImages < _images.length
                ? prevState.visibleImages + 1
                : prevState.visibleImages,
          }));
        } else if (offsetVisibleImages > 0) {
          this.setState(prevState => ({
            visibleImages: prevState.visibleImages + offsetVisibleImages,
            offsetVisibleImages: 0,
            showArrows: true,
          }));
          if (this.props.infinite) {
            this.setState(prevState => {
              const lastMedia = getLastChildMedia(this.containerRef);
              let newState = {
                _images: copyLastImageToStart(prevState._images),
                offsetWidth: lastMedia ? -lastMedia.clientWidth : 0,
                totalOffsetWidth: lastMedia ? -lastMedia.clientWidth : 0,
              };
              if (
                totalWidth - lastMedia.clientWidth <
                this.containerRef.clientWidth
              ) {
                newState = {
                  ...newState,
                  visibleImages:
                    prevState.visibleImages < _images.length
                      ? prevState.visibleImages + 1
                      : prevState.visibleImages,
                };
              }
              return newState;
            });
          }
        }
      }
    }
  };

  state = {
    visibleImages: 0,
    currentImage: 0,
    offsetWidth: 0,
    _images: this.props.images,
    transition: false,
    lazyload: this.props.lazyload,
    copyImagesAndNoDOMVisibleChanges: this.copyImagesAndNoDOMVisibleChanges,
    loadMoreImages: this.loadMoreImages,
    offsetVisibleImages: this.props.offsetVisibleImages,
    showArrows: false,
    totalOffsetWidth: 0,
    offsetToRevealNextChild: 0,
    direction: null,
    infinite: this.props.infinite,
    allowNextMove: true,
  };

  containerRef: ?HTMLDivElement;

  checkIfNeedToMoveGallery = (prevState: State) => {
    const { infinite } = this.props;
    if (
      !prevState.offsetToRevealNextChild &&
      this.state.offsetToRevealNextChild
    ) {
      if (!infinite) {
        this.checkIfNeedToHideRightArrow();
      }
      if (this.state.direction === 'prev') {
        setTimeout(() => this.setState(moveToPrev), 100);
      }
      if (this.state.direction === 'next') {
        setTimeout(() => this.setState(moveToNext), 100);
      }
    }
  };

  componentDidMount() {
    this.setState({ visibleImages: 1 });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    this.checkIfNeedToMoveGallery(prevState);
  }

  swipedNext = (e, deltaY) => {
    if (
      !this.props.infinite &&
      (this.state.currentImage + 1 === this.state._images.length ||
        !this.state.allowNextMove)
    ) {
      return null;
    }
    this.copyImagesAndNoDOMVisibleChanges('next');
  };

  swipingNext = (e, absX) => {
    if (
      !this.props.infinite &&
      (this.state.currentImage + 1 === this.state._images.length ||
        !this.state.allowNextMove)
    ) {
      return null;
    }

    this.setState(prevState => ({
      offsetWidth: prevState.totalOffsetWidth - (absX < 100 ? absX : 100),
    }));
  };

  swipedPrev = (e, deltaY) => {
    this.copyImagesAndNoDOMVisibleChanges('prev');
  };

  swipingPrev = (e, absX) => {
    const { infinite } = this.props;
    if (!infinite && this.state.currentImage === 0) {
      return null;
    }
    let firstVisibleChildWidth;
    if (infinite) {
      const secondChild = getNChildMedia(this.containerRef, 0);
      firstVisibleChildWidth = secondChild ? secondChild.clientWidth : 0;
    } else {
      const currentChild = getNChildMedia(
        this.containerRef,
        this.state.currentImage - 1,
      );
      firstVisibleChildWidth = currentChild ? currentChild.clientWidth : 0;
    }
    this.setState(prevState => {
      return {
        offsetWidth:
          prevState.totalOffsetWidth +
          (absX < firstVisibleChildWidth ? absX : firstVisibleChildWidth),
      };
    });
  };

  render() {
    return (
      <MediaGalleryContext.Provider value={this.state}>
        <Swipeable
          trackMouse
          stopPropagation
          onSwipedLeft={this.swipedNext}
          onSwipingLeft={this.swipingNext}
          onSwipedRight={this.swipedPrev}
          onSwipingRight={this.swipingPrev}
        >
          <Container innerRef={ref => (this.containerRef = ref)}>
            {this.props.children}
          </Container>
        </Swipeable>
      </MediaGalleryContext.Provider>
    );
  }
}

export default MediaGallery;
