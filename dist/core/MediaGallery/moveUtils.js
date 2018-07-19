'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveToPrev = exports.moveToNext = exports.prepareImagesOnDOMForMoving = exports.replaceLastImageToStart = exports.copyStartImageToLast = exports.copyLastImageToStart = undefined;

var _helpers = require('./helpers');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var preareToMovePrev = function preareToMovePrev(prevState, props, direction, containerRef) {
  var infinite = props.infinite;
  /** The current lastChild is the same as the first item, always in infinite
   * so this is the one will become visible
   */

  var childWillBecomeVisible = infinite ? (0, _helpers.getLastChildMedia)(containerRef) : (0, _helpers.getNChildMedia)(containerRef, prevState.currentImage - 1);
  var childWillBecomeVisibleWidth = childWillBecomeVisible ? childWillBecomeVisible.clientWidth : 0;

  /** The second last (length - 2) is the one will be copied to be
   * the first one, but it will be hidden (by the offset)
   */
  var newChildWillBeOffsetHidden = (0, _helpers.getSecondLastChildMedia)(containerRef);
  var newChildWillBeOffsetHiddenWidth = newChildWillBeOffsetHidden ? newChildWillBeOffsetHidden.clientWidth : 0;

  /** First remove the current last image (because is the one it will become visible)
   * and then copy the last one to the first one
   */

  var _images = infinite ? copyLastImageToStart(prevState._images.slice(0, -1)) : prevState._images;
  return {
    _images: _images,
    direction: direction,
    visibleImages: prevState.visibleImages < prevState._images.length ? prevState.visibleImages + 1 : prevState.visibleImages,
    totalOffsetWidth: infinite ? prevState.totalOffsetWidth - newChildWillBeOffsetHiddenWidth : prevState.totalOffsetWidth,
    offsetWidth: infinite ? prevState.totalOffsetWidth - newChildWillBeOffsetHiddenWidth + (Math.abs(prevState.totalOffsetWidth) - Math.abs(prevState.offsetWidth)) : prevState.totalOffsetWidth + Math.abs(prevState.totalOffsetWidth) - Math.abs(prevState.offsetWidth),
    offsetToRevealNextChild: childWillBecomeVisibleWidth,
    transition: false,
    currentImage: infinite ? 0 : prevState.currentImage - 1
  };
};

var prepareToMoveNext = function prepareToMoveNext(prevState, props, direction, containerRef) {
  var infinite = props.infinite;

  var firstVisibleChildWidth = void 0;
  if (infinite) {
    var secondChild = (0, _helpers.getNChildMedia)(containerRef, 1);
    firstVisibleChildWidth = secondChild ? secondChild.clientWidth : 0;
  } else {
    var currentChild = (0, _helpers.getNChildMedia)(containerRef, prevState.currentImage);
    firstVisibleChildWidth = currentChild ? currentChild.clientWidth : 0;
  }

  var _images = infinite ? copyStartImageToLast(prevState._images.slice(1)) : prevState._images;
  return {
    _images: _images,
    direction: direction,
    visibleImages: prevState.visibleImages < prevState._images.length ? prevState.visibleImages + 1 : prevState.visibleImages,
    totalOffsetWidth: infinite ? 0 : prevState.totalOffsetWidth,
    currentImage: infinite ? 0 : prevState.currentImage + 1,
    offsetWidth: infinite ? 0 - (Math.abs(prevState.offsetWidth) - Math.abs(prevState.totalOffsetWidth)) : prevState.totalOffsetWidth + Math.abs(prevState.totalOffsetWidth) - Math.abs(prevState.offsetWidth),
    offsetToRevealNextChild: firstVisibleChildWidth,
    transition: false
  };
};

var prepareImagesOnDOMForMoving = function prepareImagesOnDOMForMoving(direction, containerRef) {
  return function (prevState, props) {
    if (direction === 'prev') {
      if (!props.infinite && prevState.currentImage === 0) return null;
      return preareToMovePrev(prevState, props, direction, containerRef);
    }

    if (direction === 'next') {
      if (!props.infinite && prevState.currentImage === prevState._images.length - 1) return null;
      return prepareToMoveNext(prevState, props, direction, containerRef);
    }
  };
};

var moveToPrev = function moveToPrev(prevState) {
  /**
   * [06, 07, 0, 1, 2, 3, 4, 5, 6]
   * lastChild = 6 // same as 1st offset child
   */
  return {
    totalOffsetWidth: prevState.totalOffsetWidth + prevState.offsetToRevealNextChild,
    offsetWidth: prevState.totalOffsetWidth + prevState.offsetToRevealNextChild,
    offsetToRevealNextChild: 0,
    transition: true,
    direction: null
  };
};

var moveToNext = function moveToNext(prevState) {
  /**
   * [06, 07, 0, 1, 2, 3, 4, 5, 6]
   * lastChild = 6 // same as 1st offset child
   */
  return {
    totalOffsetWidth: prevState.totalOffsetWidth - prevState.offsetToRevealNextChild,
    offsetWidth: prevState.totalOffsetWidth - prevState.offsetToRevealNextChild,
    offsetToRevealNextChild: 0,
    transition: true,
    direction: null
  };
};

var getNewKey = function getNewKey(key) {
  return '0' + key;
};

var replaceLastImageToStart = function replaceLastImageToStart(_images) {
  return [Object.assign({}, _images[_images.length - 1], {
    keyId: getNewKey(_images[_images.length - 1].keyId || _images[_images.length - 1].id.toString())
  })].concat(_toConsumableArray(_images.slice(0, -1)));
};

var copyLastImageToStart = function copyLastImageToStart(_images) {
  return [Object.assign({}, _images[_images.length - 1], {
    keyId: getNewKey(_images[_images.length - 1].keyId || _images[_images.length - 1].id.toString())
  })].concat(_toConsumableArray(_images));
};

var copyStartImageToLast = function copyStartImageToLast(_images) {
  return [].concat(_toConsumableArray(_images), [Object.assign({}, _images[0], {
    keyId: getNewKey(_images[0].keyId || _images[0].id.toString())
  })]);
};

exports.copyLastImageToStart = copyLastImageToStart;
exports.copyStartImageToLast = copyStartImageToLast;
exports.replaceLastImageToStart = replaceLastImageToStart;
exports.prepareImagesOnDOMForMoving = prepareImagesOnDOMForMoving;
exports.moveToNext = moveToNext;
exports.moveToPrev = moveToPrev;