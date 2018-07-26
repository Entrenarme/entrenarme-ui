'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  > div:before {\n    border-bottom: 1px solid ', ';\n  }\n\n  input {\n    color: ', ' !important;\n    font-family: ', ' !important;\n  }\n'], ['\n  > div:before {\n    border-bottom: 1px solid ', ';\n  }\n\n  input {\n    color: ', ' !important;\n    font-family: ', ' !important;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _InputAdornment = require('@material-ui/core/InputAdornment');

var _InputAdornment2 = _interopRequireDefault(_InputAdornment);

var _styles = require('@material-ui/core/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss = require('jss');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../helpers/fonts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: { main: _colors2.default.secondary.default, dark: _colors2.default.secondary.default },
    error: { main: _colors2.default.error.default, dark: _colors2.default.error.default },
    text: { primary: _colors2.default.gray.placeholder }
  }
});

var generateClassName = (0, _styles.createGenerateClassName)({ productionPrefix: 'eui' });
var jss = (0, _jss.create)((0, _styles.jssPreset)());

var STextField = (0, _styledComponents2.default)(_TextField2.default)(_templateObject, _colors2.default.gray.placeholder, _colors2.default.text, _fonts.regularFont);

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.onInputChange = (0, _debounce2.default)(function (e) {
      _this.props.onChange(e);
    }, _this.props.debounceMs), _this.onChange = function (e) {
      e.persist();
      _this.onInputChange(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          adornment = _props.adornment,
          onChange = _props.onChange,
          debounceMs = _props.debounceMs,
          rest = _objectWithoutProperties(_props, ['adornment', 'onChange', 'debounceMs']);

      return React.createElement(
        _JssProvider2.default,
        { jss: jss, generateClassName: generateClassName },
        React.createElement(
          _styles.MuiThemeProvider,
          { theme: theme },
          React.createElement(STextField, Object.assign({
            onChange: this.onChange
          }, rest, {
            InputProps: {
              startAdornment: adornment ? React.createElement(
                _InputAdornment2.default,
                { position: 'start' },
                adornment
              ) : null
            }
          }))
        )
      );
    }
  }]);

  return TextField;
}(React.Component);

TextField.defaultProps = {
  label: '',
  placeholder: '',
  adornment: null,
  type: 'text',
  onChange: function onChange() {},
  debounceMs: 0
};
exports.default = TextField;