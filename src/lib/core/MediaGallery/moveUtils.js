// @flow
import {
  getFirstChildMedia,
  getLastChildMedia,
  getNChildMedia,
} from './helpers';

import type { State, Props } from './index';

const moveToLeft = instanceProps => (prevState: State, props: Props) => {
  const lastChildMedia = getLastChildMedia(instanceProps.containerRef);
  const newState = {
    _images: props.infinite
      ? copyLastImageToStart(prevState._images)
      : prevState._images,
    offsetWidth:
      prevState.offsetWidth - (lastChildMedia ? lastChildMedia.clientWidth : 0),
    moveLeft: true,
    visibleImages: prevState.visibleImages + 1,
    transition: false,
  };
  return newState;
};

const moveToRight = instanceProps => (prevState: State, props: Props) => {
  const { infinite } = props;
  const firstChildMedia = getFirstChildMedia(instanceProps.containerRef);
  const nChildMedia = getNChildMedia(
    instanceProps.containerRef,
    prevState.currentImage,
  );
  return {
    _images: props.infinite
      ? copyStartImageToLast(prevState._images)
      : prevState._images,
    moveRight: true,
    offsetWidth: infinite
      ? prevState.offsetWidth -
        (firstChildMedia ? firstChildMedia.clientWidth : 0)
      : prevState.offsetWidth - (nChildMedia ? nChildMedia.clientWidth : 0),
    transition: true,
    visibleImages: prevState.visibleImages + 1,
    swiped: false,
    swipLeft: false,
  };
};

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

const moveLeftFn = (prevState: State, props: Props) => {
  const { _images } = prevState;
  const { infinite } = props;

  const allImagesArray = [..._images];
  let newArray = [];
  allImagesArray.splice(_images.length - 1, 1);
  newArray = [...allImagesArray];

  return {
    _images: infinite ? newArray : prevState._images,
    offsetWidth: infinite ? 0 : prevState.offsetWidth,
    currentImage:
      !infinite && prevState.currentImage > 0 ? prevState.currentImage - 1 : 0,
    transition: true,
    moveLeft: false,
    swiping: false,
    swipedRightAbs: 0,
  };
};

const moveRightFn = (prevState: State, props: Props) => {
  const { _images } = prevState;
  const { infinite } = props;

  const allImagesArray = [..._images];
  let newArray = [];
  allImagesArray.splice(0, 1);
  newArray = [...allImagesArray];

  return {
    _images: infinite ? newArray : prevState._images,
    offsetWidth: infinite ? 0 : prevState.offsetWidth,
    currentImage: !infinite ? prevState.currentImage + 1 : 0,
    transition: false,
    moveRight: false,
  };
};

const copyStartImageToLast = (_images: Array<CustomImage>) => {
  return [..._images, { ..._images[0], key: getNewKey(_images[0].key) }];
};

const swipingRightInit = instanceProps => (prevState: State, props: Props) => {
  const newState = {
    ...moveToLeft(instanceProps)(prevState, props),
    moveLeft: false,
    swipRight: true,
  };

  const lastChildMedia = getLastChildMedia(instanceProps.containerRef);
  const oldState = {
    _images: copyLastImageToStart(prevState._images),
    offsetWidth:
      prevState.offsetWidth - (lastChildMedia ? lastChildMedia.clientWidth : 0),
    transition: false,
    swipRight: true,
    visibleImages: prevState.visibleImages + 1,
  };

  console.log('OS', oldState);
  console.log('NS', newState);

  return newState;
};

export { moveToLeft, moveToRight, moveLeftFn, moveRightFn, swipingRightInit };
