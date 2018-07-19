var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  > div:before {\n    border-bottom: 1px solid ', ';\n  }\n\n  input {\n    color: ', ' !important;\n    font-family: ', ' !important;\n  }\n'], ['\n  > div:before {\n    border-bottom: 1px solid ', ';\n  }\n\n  input {\n    color: ', ' !important;\n    font-family: ', ' !important;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import MTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import debounce from 'lodash/debounce';

import colors from '../../helpers/colors';
import { regularFont } from '../../helpers/fonts';

var theme = createMuiTheme({
  palette: {
    primary: { main: colors.secondary.default, dark: colors.secondary.default },
    error: { main: colors.error.default, dark: colors.error.default },
    text: { primary: colors.gray.placeholder }
  }
});

var STextField = styled(MTextField)(_templateObject, colors.gray.placeholder, colors.text, regularFont);

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.onInputChange = debounce(function (e) {
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
        MuiThemeProvider,
        { theme: theme },
        React.createElement(STextField, Object.assign({
          onChange: this.onChange
        }, rest, {
          InputProps: {
            startAdornment: adornment ? React.createElement(
              InputAdornment,
              { position: 'start' },
              adornment
            ) : null
          }
        }))
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


export default TextField;