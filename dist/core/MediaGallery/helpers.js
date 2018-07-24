'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecondLastChildMedia = exports.getNChildMedia = exports.getFirstChildMedia = exports.getLastChildMedia = exports.getAllChild = exports.checkPropErrors = exports.getAllChildMedia = undefined;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _invariant2.default)(!isError, 'If you pass a lazyload prop, you should pass a visibleImages number too');
};

exports.getAllChildMedia = getAllChildMedia;
exports.checkPropErrors = checkPropErrors;
exports.getAllChild = getAllChild;
exports.getLastChildMedia = getLastChildMedia;
exports.getFirstChildMedia = getFirstChildMedia;
exports.getNChildMedia = getNChildMedia;
exports.getSecondLastChildMedia = getSecondLastChildMedia;