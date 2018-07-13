// @flow
import * as React from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable';

import Arrow from './Arrow';
import Gallery from './Gallery';

import {
  getLastChildMedia,
  getFirstChildMedia,
  getAllChildMedia,
} from './helpers';

import {
  moveLeftFn,
  moveRightFn,
  moveToLeft,
  moveToRight,
  swipingRightInit,
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
  placeholderWidth: string,
  imageWidth: string,
  imageHeight: string,
  children: React.Node,
};

export type State = {
  visibleImages: number,
  currentImage: number,
  offsetWidth: number,
  _images: Array<CustomImage>,
  transition: boolean,
  lazyload: boolean,
  handleLeftClick: Function,
  handleRightClick: Function,
  dontUpdate: boolean,
  offsetVisibleImages: number,
  moveLeft: boolean,
  moveRight: boolean,
  showArrows: boolean,
  swiped: boolean,
  swipLeft: boolean,
  swipRight: boolean,
  swipedRightAbs: number,
};

const MediaGalleryContext = React.createContext();

class MediaGallery extends React.Component<Props, State> {
  static LeftArrow = () => (
    <MediaGalleryContext.Consumer>
      {({ handleLeftClick, showArrows }: State) =>
        showArrows && <Arrow onClick={handleLeftClick} />
      }
    </MediaGalleryContext.Consumer>
  );

  static RightArrow = () => (
    <MediaGalleryContext.Consumer>
      {({ handleRightClick, showArrows }: State) =>
        showArrows && <Arrow right onClick={handleRightClick} />
      }
    </MediaGalleryContext.Consumer>
  );

  static Gallery = (props: {
    imageHeight: string,
    imageWidth: string,
    placeholderWidth: string,
  }) => (
    <MediaGalleryContext.Consumer>
      {({ handleLeftClick, handleRightClick, ...rest }: State) => (
        <Gallery {...rest} {...props} />
      )}
    </MediaGalleryContext.Consumer>
  );

  static defaultProps = {
    lazyload: false,
    infinite: false,
    visibleImages: null,
    offsetVisibleImages: 0,
  };

  handleLeftClick = () => {
    const { infinite } = this.props;
    if (this.state.moveLeft || (!infinite && this.state.currentImage === 0)) {
      return null;
    }
    this.setState(moveToLeft({ containerRef: this.containerRef }));
  };

  handleRightClick = () => {
    const { infinite } = this.props;
    if (
      this.state.moveRight ||
      (!infinite && this.state.currentImage + 1 === this.state._images.length)
    ) {
      return null;
    }
    this.setState(moveToRight({ containerRef: this.containerRef }));
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
    handleLeftClick: this.handleLeftClick,
    handleRightClick: this.handleRightClick,
    dontUpdate: false,
    loadMoreImages: this.loadMoreImages,
    offsetVisibleImages: this.props.offsetVisibleImages,
    moveLeft: false,
    moveRight: false,
    showArrows: false,
    swiped: false,
    swipLeft: false,
    swipRight: false,
    swipedRightAbs: 0,
  };

  containerRef: ?HTMLDivElement;

  componentDidMount() {
    this.setState({ visibleImages: 1 });
  }

  handleMove = (prevState: State) => {
    const { moveLeft, moveRight } = this.state;
    if (!prevState.moveLeft && moveLeft) {
      setTimeout(() => this.setState(moveLeftFn), 0);
    }

    if (!prevState.moveRight && moveRight) {
      setTimeout(() => this.setState(moveRightFn), 300);
    }
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    this.handleMove(prevState);
    if (
      this.state.swipedRightAbs < 10 &&
      this.state.swipedRightAbs > 0 &&
      this.state.swiped
    ) {
      this.setState(prevState => ({
        _images: prevState._images.slice(1),
        offsetWidth: 0,
        swiped: false,
        swipRight: false,
        swipedRightAbs: 0,
      }));
    }
  }

  swipedLeft = (e, deltaY, isFlick) => {
    if (this.state.swipRight) {
      return null;
    }
    this.handleRightClick();
  };

  swipingLeft = (e, absX) => {
    if (this.state.swipRight) {
      return null;
    }
    this.setState({
      offsetWidth: 0 - (absX < 100 ? absX : 100),
      swipLeft: true,
    });
  };

  swipedRight = (e, deltaY, isFlick) => {
    const { infinite } = this.props;
    if (this.state.swipLeft || (!infinite && this.state.currentImage === 0)) {
      return null;
    }
    this.setState({ moveLeft: true });
  };

  swipingRight = (e, absX) => {
    const { infinite } = this.props;
    if (this.state.swipLeft || (!infinite && this.state.currentImage === 0)) {
      return null;
    }
    if (this.state.offsetWidth === 0) {
      this.setState(swipingRightInit({ containerRef: this.containerRef }));
    } else {
      const firstChildMedia = getFirstChildMedia(this.containerRef);
      this.setState({
        offsetWidth:
          -(firstChildMedia ? firstChildMedia.clientWidth : 0) +
          (absX < 100 ? absX : 100),
        swipedRightAbs: absX < 100 ? absX : 100,
      });
    }
  };

  render() {
    return (
      <MediaGalleryContext.Provider value={this.state}>
        <Swipeable
          onSwipedLeft={this.swipedLeft}
          onSwipingLeft={this.swipingLeft}
          onSwipedRight={this.swipedRight}
          onSwipingRight={this.swipingRight}
          onSwiped={e => this.setState({ swiped: true })}
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
