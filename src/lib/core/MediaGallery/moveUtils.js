// @flow
import {
  getSecondLastChildMedia,
  getLastChildMedia,
  getNChildMedia,
} from './helpers';

import type { State, Props } from './index';

const preareToMovePrev = (
  prevState: State,
  props: Props,
  direction: 'prev' | 'next',
  containerRef: Object,
) => {
  const { infinite } = props;
  /** The current lastChild is the same as the first item, always in infinite
   * so this is the one will become visible
   */
  let childWillBecomeVisible = infinite
    ? getLastChildMedia(containerRef)
    : getNChildMedia(containerRef, prevState.currentImage - 1);
  const childWillBecomeVisibleWidth = childWillBecomeVisible
    ? childWillBecomeVisible.clientWidth
    : 0;

  /** The second last (length - 2) is the one will be copied to be
   * the first one, but it will be hidden (by the offset)
   */
  const newChildWillBeOffsetHidden = getSecondLastChildMedia(containerRef);
  const newChildWillBeOffsetHiddenWidth = newChildWillBeOffsetHidden
    ? newChildWillBeOffsetHidden.clientWidth
    : 0;

  /** First remove the current last image (because is the one it will become visible)
   * and then copy the last one to the first one
   */

  const _images = infinite
    ? copyLastImageToStart(prevState._images.slice(0, -1))
    : prevState._images;
  return {
    _images,
    direction,
    visibleImages:
      prevState.visibleImages < prevState._images.length
        ? prevState.visibleImages + 1
        : prevState.visibleImages,
    totalOffsetWidth: infinite
      ? prevState.totalOffsetWidth - newChildWillBeOffsetHiddenWidth
      : prevState.totalOffsetWidth,
    offsetWidth: infinite
      ? prevState.totalOffsetWidth -
        newChildWillBeOffsetHiddenWidth +
        (Math.abs(prevState.totalOffsetWidth) - Math.abs(prevState.offsetWidth))
      : prevState.totalOffsetWidth +
        Math.abs(prevState.totalOffsetWidth) -
        Math.abs(prevState.offsetWidth),
    offsetToRevealNextChild: childWillBecomeVisibleWidth,
    transition: false,
    currentImage: infinite ? 0 : prevState.currentImage - 1,
  };
};

const prepareToMoveNext = (
  prevState: State,
  props: Props,
  direction: 'next' | 'prev',
  containerRef: Object,
) => {
  const { infinite } = props;
  let firstVisibleChildWidth;
  if (infinite) {
    const secondChild = getNChildMedia(containerRef, 1);
    firstVisibleChildWidth = secondChild ? secondChild.clientWidth : 0;
  } else {
    const currentChild = getNChildMedia(containerRef, prevState.currentImage);
    firstVisibleChildWidth = currentChild ? currentChild.clientWidth : 0;
  }

  const _images = infinite
    ? copyStartImageToLast(prevState._images.slice(1))
    : prevState._images;
  return {
    _images,
    direction,
    visibleImages:
      prevState.visibleImages < prevState._images.length
        ? prevState.visibleImages + 1
        : prevState.visibleImages,
    totalOffsetWidth: infinite ? 0 : prevState.totalOffsetWidth,
    currentImage: infinite ? 0 : prevState.currentImage + 1,
    offsetWidth: infinite
      ? 0 -
        (Math.abs(prevState.offsetWidth) - Math.abs(prevState.totalOffsetWidth))
      : prevState.totalOffsetWidth +
        Math.abs(prevState.totalOffsetWidth) -
        Math.abs(prevState.offsetWidth),
    offsetToRevealNextChild: firstVisibleChildWidth,
    transition: false,
  };
};

const prepareImagesOnDOMForMoving = (
  direction: 'prev' | 'next',
  containerRef: Object,
) => (prevState: State, props: Props) => {
  if (direction === 'prev') {
    if (!props.infinite && prevState.currentImage === 0) return null;
    return preareToMovePrev(prevState, props, direction, containerRef);
  }

  if (direction === 'next') {
    if (
      !props.infinite &&
      prevState.currentImage === prevState._images.length - 1
    )
      return null;
    return prepareToMoveNext(prevState, props, direction, containerRef);
  }
};

const moveToPrev = (prevState: State) => {
  /**
   * [06, 07, 0, 1, 2, 3, 4, 5, 6]
   * lastChild = 6 // same as 1st offset child
   */
  return {
    swiping: false,
    totalOffsetWidth:
      prevState.totalOffsetWidth + prevState.offsetToRevealNextChild,
    offsetWidth: prevState.totalOffsetWidth + prevState.offsetToRevealNextChild,
    offsetToRevealNextChild: 0,
    transition: true,
    direction: null,
  };
};

const moveToNext = (prevState: State) => {
  /**
   * [06, 07, 0, 1, 2, 3, 4, 5, 6]
   * lastChild = 6 // same as 1st offset child
   */
  return {
    swiping: false,
    totalOffsetWidth:
      prevState.totalOffsetWidth - prevState.offsetToRevealNextChild,
    offsetWidth: prevState.totalOffsetWidth - prevState.offsetToRevealNextChild,
    offsetToRevealNextChild: 0,
    transition: true,
    direction: null,
  };
};

const getNewKey = (key: string) => {
  return `0${key}`;
};

const replaceLastImageToStart = (_images: Array<CustomImage>) => {
  return [
    {
      ..._images[_images.length - 1],
      keyId: getNewKey(
        _images[_images.length - 1].keyId ||
          _images[_images.length - 1].id.toString(),
      ),
    },
    ..._images.slice(0, -1),
  ];
};

const copyLastImageToStart = (_images: Array<CustomImage>) => {
  return [
    {
      ..._images[_images.length - 1],
      keyId: getNewKey(
        _images[_images.length - 1].keyId ||
          _images[_images.length - 1].id.toString(),
      ),
    },
    ..._images,
  ];
};

const copyStartImageToLast = (_images: Array<CustomImage>) => {
  return [
    ..._images,
    {
      ..._images[0],
      keyId: getNewKey(_images[0].keyId || _images[0].id.toString()),
    },
  ];
};

export {
  copyLastImageToStart,
  copyStartImageToLast,
  replaceLastImageToStart,
  prepareImagesOnDOMForMoving,
  moveToNext,
  moveToPrev,
};
