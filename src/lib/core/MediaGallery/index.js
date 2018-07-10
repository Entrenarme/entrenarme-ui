// @flow
import * as React from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';

import Arrow from './Arrow';
import Gallery from './Gallery';

import { getAllChildMedia, checkPropErrors } from './helpers';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

type Props = {
  images: Array<CustomImage>,
  lazyload: boolean,
  infinite: boolean,
  visibleImages: ?number,
  placeholderWidth: string,
  imageWidth: string,
  imageHeight: string,
  reverseDirection: boolean,
  children: React.Node,
};

type State = {
  visibleImages?: ?number,
  currentImage: number,
  offsetWidth: number,
  _images: Array<CustomImage>,
  transition: boolean,
  lazyload: boolean,
  handleLeftClick: Function,
  handleRightClick: Function,
  dontUpdate: boolean,
};

const MediaGalleryContext = React.createContext();

const getNewKey = (key: string) => {
  if (key.length === 1) {
    return `${key}${key}`;
  }
  return key[0];
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
      {({ handleLeftClick }: State) => <Arrow onClick={handleLeftClick} />}
    </MediaGalleryContext.Consumer>
  );

  static RightArrow = () => (
    <MediaGalleryContext.Consumer>
      {({ handleRightClick }: State) => (
        <Arrow right onClick={handleRightClick} />
      )}
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
  };

  handleMove = (type: 'left' | 'right') => {
    const allImages = getAllChildMedia(this.containerRef);
    if (allImages) {
      const imageIndex = type === 'left' ? allImages.length - 1 : 0;
      const currentImageElem = allImages[imageIndex];
      if (currentImageElem) {
        this.setState(prevState => ({
          offsetWidth:
            type === 'left'
              ? prevState.offsetWidth + currentImageElem.clientWidth
              : prevState.offsetWidth - currentImageElem.clientWidth,
          visibleImages: prevState.visibleImages + 1,
          transition: true,
        }));
      }
    }
  };

  handleLeftClick = throttle(() => {
    this.setState(
      prevState => ({
        _images: copyLastImageToStart(prevState._images),
        offsetWidth: getAllChildMedia(this.containerRef)
          ? 0 -
            getAllChildMedia(this.containerRef)[prevState._images.length - 1]
              .clientWidth
          : 0,
        dontUpdate: true,
      }),
      () => this.handleMove('left'),
    );
  }, 600);

  handleRightClick = throttle(() => {
    this.setState(prevState => ({
      _images: copyStartImageToLast(prevState._images),
    }));
    this.handleMove('right');
  }, 600);

  state = {
    visibleImages: this.props.visibleImages || null,
    currentImage: 0,
    offsetWidth: 0,
    _images: this.props.images,
    transition: false,
    lazyload: this.props.lazyload,
    handleLeftClick: this.handleLeftClick,
    handleRightClick: this.handleRightClick,
    dontUpdate: false,
  };

  containerRef: ?HTMLDivElement;

  componentDidMount() {
    const { lazyload, visibleImages } = this.props;
    checkPropErrors({ lazyload, visibleImages });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { offsetWidth, _images, dontUpdate } = this.state;
    if (dontUpdate) {
      const allImagesArray = [..._images];
      allImagesArray.splice(_images.length - 1, 1);
      return this.setState({
        dontUpdate: false,
        _images: allImagesArray,
        transition: false,
      });
    }
    if (offsetWidth !== prevState.offsetWidth) {
      if (offsetWidth !== 0) {
        const allImagesArray = [..._images];
        let newArray = [];
        if (offsetWidth > 0) {
          allImagesArray.splice(_images.length - 1, 1);
          newArray = [...allImagesArray];
        } else {
          allImagesArray.splice(0, 1);
          newArray = [...allImagesArray];
        }
        setTimeout(
          () =>
            this.setState({
              _images: newArray,
              offsetWidth: 0,
              currentImage: 0,
              transition: false,
            }),
          400,
        );
      }
    }
  }

  render() {
    return (
      <MediaGalleryContext.Provider value={this.state}>
        <Container innerRef={ref => (this.containerRef = ref)}>
          {this.props.children}
        </Container>
      </MediaGalleryContext.Provider>
    );
  }
}

export default MediaGallery;
