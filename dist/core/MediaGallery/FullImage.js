var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';

import { RESOURCES_URL } from '../../helpers/config';

var FullImage = function (_React$Component) {
  _inherits(FullImage, _React$Component);

  function FullImage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FullImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FullImage.__proto__ || Object.getPrototypeOf(FullImage)).call.apply(_ref, [this].concat(args))), _this), _this.onCloseDialog = function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FullImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          image = _props.image,
          open = _props.open;

      return React.createElement(
        Dialog,
        { open: open, onClose: this.onCloseDialog },
        React.createElement('img', {
          src: RESOURCES_URL + 'gallery/original/' + image.value,
          width: '100%',
          alt: 'detail'
        })
      );
    }
  }]);

  return FullImage;
}(React.Component);

FullImage.defaultProps = {
  onClose: null
};


export default FullImage;