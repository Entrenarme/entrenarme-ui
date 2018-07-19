import invariant from 'invariant';

var getAllChildMedia = function getAllChildMedia(containerRef) {
  var allImages = containerRef && containerRef.querySelectorAll('.media') || null;
  return allImages;
};

var getLastChildMedia = function getLastChildMedia(containerRef) {
  var allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    return allChildMedia[allChildMedia.length - 1];
  }
  return null;
};

var getSecondLastChildMedia = function getSecondLastChildMedia(containerRef) {
  var allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    return allChildMedia[allChildMedia.length - 2];
  }
  return null;
};

var getFirstChildMedia = function getFirstChildMedia(containerRef) {
  var allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    return allChildMedia[0];
  }
  return null;
};

var getNChildMedia = function getNChildMedia(containerRef, n) {
  var allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    var nChild = allChildMedia[n];
    if (nChild) return nChild;
  }
  return null;
};

var getAllChild = function getAllChild(containerRef) {
  var allImages = containerRef && containerRef.querySelectorAll('img, div') || null;
  return allImages;
};

var checkPropErrors = function checkPropErrors(_ref) {
  var lazyload = _ref.lazyload,
      visibleImages = _ref.visibleImages;

  var isError = lazyload && visibleImages === null;
  invariant(!isError, 'If you pass a lazyload prop, you should pass a visibleImages number too');
};

export { getAllChildMedia, checkPropErrors, getAllChild, getLastChildMedia, getFirstChildMedia, getNChildMedia, getSecondLastChildMedia };