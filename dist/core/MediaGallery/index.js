var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n'], ['\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import Swipeable from 'react-swipeable';

import Arrow from './Arrow';
import Gallery from './Gallery';

import { getAllChildMedia, getNChildMedia, getLastChildMedia } from './helpers';

import { copyLastImageToStart, prepareImagesOnDOMForMoving, moveToNext, moveToPrev } from './moveUtils';

var Container = styled.div(_templateObject);

var MediaGalleryContext = React.createContext();

var MediaGallery = function (_React$Component) {
  _inherits(MediaGallery, _React$Component);

  function MediaGallery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MediaGallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaGallery.__proto__ || Object.getPrototypeOf(MediaGallery)).call.apply(_ref, [this].concat(args))), _this), _this.checkIfNeedToHideRightArrow = function () {
      var _this$state = _this.state,
          _images = _this$state._images,
          currentImage = _this$state.currentImage,
          allowNextMove = _this$state.allowNextMove;

      var allChildMedia = getAllChildMedia(_this.containerRef);
      if (allChildMedia && _this.containerRef) {
        if (_images.length === allChildMedia.length) {
          var imagesLeftFromFirstVisible = [].concat(_toConsumableArray(allChildMedia)).slice(currentImage);
          var totalWidth = imagesLeftFromFirstVisible.reduce(function (acc, image) {
            return acc + image.clientWidth;
          }, 0);
          if (totalWidth < _this.containerRef.clientWidth) {
            _this.setState({ allowNextMove: false });
          } else if (!allowNextMove) {
            _this.setState({ allowNextMove: true });
          }
        }
      }
    }, _this.copyImagesAndNoDOMVisibleChanges = function (direction) {
      _this.setState(prepareImagesOnDOMForMoving(direction, _this.containerRef));
    }, _this.loadMoreImages = function () {
      var _this$state2 = _this.state,
          _images = _this$state2._images,
          offsetVisibleImages = _this$state2.offsetVisibleImages;

      var allImages = getAllChildMedia(_this.containerRef);
      if (allImages) {
        var totalWidth = [].concat(_toConsumableArray(allImages)).reduce(function (acc, image) {
          return acc + image.clientWidth;
        }, 0);
        if (_this.containerRef) {
          if (totalWidth < _this.containerRef.clientWidth) {
            _this.setState(function (prevState) {
              return {
                visibleImages: prevState.visibleImages < _images.length ? prevState.visibleImages + 1 : prevState.visibleImages
              };
            });
          } else if (offsetVisibleImages > 0) {
            _this.setState(function (prevState) {
              return {
                visibleImages: prevState.visibleImages + offsetVisibleImages,
                offsetVisibleImages: 0,
                showArrows: true
              };
            });
            if (_this.props.infinite) {
              _this.setState(function (prevState) {
                var lastMedia = getLastChildMedia(_this.containerRef);
                var newState = {
                  _images: copyLastImageToStart(prevState._images),
                  offsetWidth: lastMedia ? -lastMedia.clientWidth : 0,
                  totalOffsetWidth: lastMedia ? -lastMedia.clientWidth : 0
                };
                if (totalWidth - lastMedia.clientWidth < _this.containerRef.clientWidth) {
                  newState = Object.assign({}, newState, {
                    visibleImages: prevState.visibleImages < _images.length ? prevState.visibleImages + 1 : prevState.visibleImages
                  });
                }
                return newState;
              });
            }
          }
        }
      }
    }, _this.state = {
      visibleImages: 0,
      currentImage: 0,
      offsetWidth: 0,
      _images: _this.props.images,
      transition: false,
      lazyload: _this.props.lazyload,
      copyImagesAndNoDOMVisibleChanges: _this.copyImagesAndNoDOMVisibleChanges,
      loadMoreImages: _this.loadMoreImages,
      offsetVisibleImages: _this.props.offsetVisibleImages,
      showArrows: false,
      totalOffsetWidth: 0,
      offsetToRevealNextChild: 0,
      direction: null,
      infinite: _this.props.infinite,
      allowNextMove: true
    }, _this.checkIfNeedToMoveGallery = function (prevState) {
      var infinite = _this.props.infinite;

      if (!prevState.offsetToRevealNextChild && _this.state.offsetToRevealNextChild) {
        if (!infinite) {
          _this.checkIfNeedToHideRightArrow();
        }
        if (_this.state.direction === 'prev') {
          setTimeout(function () {
            return _this.setState(moveToPrev);
          }, 100);
        }
        if (_this.state.direction === 'next') {
          setTimeout(function () {
            return _this.setState(moveToNext);
          }, 100);
        }
      }
    }, _this.swipedNext = function (e, deltaY) {
      if (!_this.props.infinite && (_this.state.currentImage + 1 === _this.state._images.length || !_this.state.allowNextMove)) {
        return null;
      }
      _this.copyImagesAndNoDOMVisibleChanges('next');
    }, _this.swipingNext = function (e, absX) {
      if (!_this.props.infinite && (_this.state.currentImage + 1 === _this.state._images.length || !_this.state.allowNextMove)) {
        return null;
      }

      _this.setState(function (prevState) {
        return {
          offsetWidth: prevState.totalOffsetWidth - (absX < 100 ? absX : 100)
        };
      });
    }, _this.swipedPrev = function (e, deltaY) {
      _this.copyImagesAndNoDOMVisibleChanges('prev');
    }, _this.swipingPrev = function (e, absX) {
      var infinite = _this.props.infinite;

      if (!infinite && _this.state.currentImage === 0) {
        return null;
      }
      var firstVisibleChildWidth = void 0;
      if (infinite) {
        var secondChild = getNChildMedia(_this.containerRef, 0);
        firstVisibleChildWidth = secondChild ? secondChild.clientWidth : 0;
      } else {
        var currentChild = getNChildMedia(_this.containerRef, _this.state.currentImage - 1);
        firstVisibleChildWidth = currentChild ? currentChild.clientWidth : 0;
      }
      _this.setState(function (prevState) {
        return {
          offsetWidth: prevState.totalOffsetWidth + (absX < firstVisibleChildWidth ? absX : firstVisibleChildWidth)
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MediaGallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ visibleImages: 1 });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.checkIfNeedToMoveGallery(prevState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        MediaGalleryContext.Provider,
        { value: this.state },
        React.createElement(
          Swipeable,
          {
            trackMouse: true,
            stopPropagation: true,
            onSwipedLeft: this.swipedNext,
            onSwipingLeft: this.swipingNext,
            onSwipedRight: this.swipedPrev,
            onSwipingRight: this.swipingPrev
          },
          React.createElement(
            Container,
            { innerRef: function innerRef(ref) {
                return _this2.containerRef = ref;
              } },
            this.props.children
          )
        )
      );
    }
  }]);

  return MediaGallery;
}(React.Component);

MediaGallery.LeftArrow = function (_ref2) {
  var rounded = _ref2.rounded,
      component = _ref2.component;
  return React.createElement(
    MediaGalleryContext.Consumer,
    null,
    function (_ref3) {
      var copyImagesAndNoDOMVisibleChanges = _ref3.copyImagesAndNoDOMVisibleChanges,
          showArrows = _ref3.showArrows,
          infinite = _ref3.infinite,
          currentImage = _ref3.currentImage;
      return !showArrows || !infinite && currentImage === 0 ? null : React.createElement(Arrow, {
        rounded: rounded,
        component: component,
        onClick: function onClick() {
          return copyImagesAndNoDOMVisibleChanges('prev');
        }
      });
    }
  );
};

MediaGallery.RightArrow = function (_ref4) {
  var rounded = _ref4.rounded,
      component = _ref4.component;
  return React.createElement(
    MediaGalleryContext.Consumer,
    null,
    function (_ref5) {
      var copyImagesAndNoDOMVisibleChanges = _ref5.copyImagesAndNoDOMVisibleChanges,
          showArrows = _ref5.showArrows,
          infinite = _ref5.infinite,
          currentImage = _ref5.currentImage,
          _images = _ref5._images,
          allowNextMove = _ref5.allowNextMove;
      return !showArrows || !infinite && currentImage === _images.length - 1 || !allowNextMove ? null : React.createElement(Arrow, {
        right: true,
        rounded: rounded,
        component: component,
        onClick: function onClick() {
          return copyImagesAndNoDOMVisibleChanges('next');
        }
      });
    }
  );
};

MediaGallery.Gallery = function (props) {
  return React.createElement(
    MediaGalleryContext.Consumer,
    null,
    function (_ref6) {
      var handleLeftClick = _ref6.handleLeftClick,
          copyImagesAndNoDOMVisibleChanges = _ref6.copyImagesAndNoDOMVisibleChanges,
          rest = _objectWithoutProperties(_ref6, ['handleLeftClick', 'copyImagesAndNoDOMVisibleChanges']);

      return React.createElement(Gallery, Object.assign({}, rest, props));
    }
  );
};

MediaGallery.defaultProps = {
  lazyload: false,
  infinite: false,
  visibleImages: null,
  offsetVisibleImages: 3
};


export default MediaGallery;