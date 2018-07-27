'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _styles = require('@material-ui/core/styles');

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss = require('jss');

var _config = require('../../helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var generateClassName = (0, _styles.createGenerateClassName)({
  productionPrefix: 'eui'
});
var jss = (0, _jss.create)((0, _styles.jssPreset)());

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
        _JssProvider2.default,
        { jss: jss, generateClassName: generateClassName },
        React.createElement(
          _styles.MuiThemeProvider,
          { theme: (0, _styles.createMuiTheme)() },
          React.createElement(
            _Dialog2.default,
            { open: open, onClose: this.onCloseDialog },
            React.createElement('img', {
              src: _config.RESOURCES_URL + 'gallery/original/' + image.value,
              width: '100%',
              alt: 'detail'
            })
          )
        )
      );
    }
  }]);

  return FullImage;
}(React.Component);

FullImage.defaultProps = {
  onClose: null
};
exports.default = FullImage;