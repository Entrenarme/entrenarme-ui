// @flow
import * as React from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable';

import Arrow from './Arrow';
import Gallery from './Gallery';

import { getAllChildMedia, checkPropErrors, getAllChild } from './helpers';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

type Props = {
  images: Array<CustomImage>,
  lazyload: boolean,
  infinite: boolean,
  offsetVisibleImages: number,
  placeholderWidth: string,
  imageWidth: string,
  imageHeight: string,
  reverseDirection: boolean,
  children: React.Node,
};

type State = {
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
};

const MediaGalleryContext = React.createContext();

const getNewKey = (key: string) => {
  return `0${key}`;
};

const copyLastImageToStart = (_images: Array<CustomImage>) => {
  return [
    {
      ..._images[_images.length - 1],
      key: getNewKey(_images[_images.length - 1].key),
    },
    ..._images,
  ];
};

const copyStartImageToLast = (_images: Array<CustomImage>) => {
  return [..._images, { ..._images[0], key: getNewKey(_images[0].key) }];
};

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
    // this method will be called from <Gallery /> whenever we want to move it
    // it will setState with new _images array and trigger a
    // 1) re-render of the Gallery
    // 2) call to componentDidUpdate (next comment there)
    if (this.state.moveLeft) {
      // will be false when the transition is done, meanwhile
      // we not allow to do another transition
      return null;
    }
    this.setState(prevState => ({
      _images: copyLastImageToStart(prevState._images),
      moveLeft: true,
    }));
  };

  handleRightClick = () => {
    // (same as handleLeftClick)
    if (this.state.moveRight) {
      // will be false when the transition is done, meanwhile
      // we not allow to do another transition
      return null;
    }
    // we copy the 1st image to the end of the original _images array
    // and the component re-renders so we have one more image
    // but we as users did not perceive that
    this.setState(prevState => ({
      _images: copyStartImageToLast(prevState._images),
      moveRight: true,
    }));
  };

  loadMoreImages = () => {
    const { _images, offsetVisibleImages } = this.state;
    const allImages = getAllChildMedia(this.containerRef);
    if (allImages) {
      const totalWidth = [...allImages].reduce(
        (acc, image) => acc + image.clientWidth,
        0,
      );
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
  };

  containerRef: ?HTMLDivElement;

  componentDidMount() {
    // const { lazyload, visibleImages } = this.props;
    // checkPropErrors({ lazyload, visibleImages });
    this.setState({ visibleImages: 1 });
  }

  moveLeft = () => {
    // 6) the first setState here, happens synchronous on the componentDidUpdate and the previous re-render
    //    so the user sees on the screen what the setState returns, meaning the offset
    //    we are setting here (so the re-render with the different _images array + the offset set here)
    const { _images } = this.state;
    // we compensate the width of the image added at the beggining by setting the negative offset
    // of its witdh with no transition, so we cannot notice it is added.
    this.setState(prevState => ({
      offsetWidth:
        prevState.offsetWidth !== 0
          ? prevState.offsetWidth +
            getAllChildMedia(this.containerRef)[0].clientWidth
          : 0 - getAllChildMedia(this.containerRef)[0].clientWidth,
      transition: prevState.offsetWidth !== 0,
      visibleImages: prevState.visibleImages + 1,
      swiped: false,
      swipRight: false,
    }));
    // 7) this operations down here are to prepare the shape the _images array
    //    should have when the offset scroll ends (so basically remove the added image on the previous steps)
    const allImagesArray = [..._images];
    let newArray = [];
    allImagesArray.splice(_images.length - 1, 1);
    newArray = [...allImagesArray];
    // we go from the previous negative offset to 0 offset with a transition, to show the first image it was added
    setTimeout(
      () =>
        this.setState({
          _images: newArray,
          offsetWidth: 0,
          currentImage: 0,
          transition: true,
          moveLeft: false,
        }),
      0,
    );
  };

  moveRight = () => {
    const { _images } = this.state;
    this.setState(prevState => ({
      offsetWidth: 0 - getAllChildMedia(this.containerRef)[0].clientWidth,
      transition: true,
      visibleImages: prevState.visibleImages + 1,
      swiped: false,
      swipLeft: false,
    }));
    const allImagesArray = [..._images];
    let newArray = [];
    allImagesArray.splice(0, 1);
    newArray = [...allImagesArray];
    setTimeout(
      () =>
        this.setState({
          _images: newArray,
          offsetWidth: 0,
          currentImage: 0,
          transition: false,
          moveRight: false,
        }),
      300,
    );
  };

  handleMove = (prevState: State) => {
    // 4) it was componentDidUpdate because of the right/left movement?
    // 5) if it was, call the corresponding method
    const { moveLeft, moveRight } = this.state;
    if (!prevState.moveLeft && moveLeft) {
      this.moveLeft();
    }

    if (!prevState.moveRight && moveRight) {
      this.moveRight();
    }
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    // 3) we are going to check if we are here because of a move happened
    this.handleMove(prevState);

    if (this.state.swiped && this.state.swipRight && !this.state.moveLeft) {
      this.setState(prevState => ({
        _images: prevState._images.slice(1),
        offsetWidth: 0,
        swiped: false,
        swipRight: false,
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
    if (this.state.swipLeft) {
      return null;
    }
    this.setState({ moveLeft: true });
  };

  swipingRight = (e, absX) => {
    if (this.state.swipLeft) {
      return null;
    }
    if (this.state.offsetWidth === 0) {
      this.setState(prevState => ({
        _images: copyLastImageToStart(this.state._images),
        offsetWidth:
          prevState.offsetWidth -
          getAllChildMedia(this.containerRef)[
            getAllChildMedia(this.containerRef).length - 1
          ].clientWidth,
        transition: false,
        swipRight: true,
      }));
    } else {
      this.setState({
        offsetWidth:
          -getAllChildMedia(this.containerRef)[0].clientWidth +
          (absX < 100 ? absX : 100),
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
