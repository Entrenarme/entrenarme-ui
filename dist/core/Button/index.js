'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _utils = require('./utils');

var _styles = require('./styles');

var _Responsive = require('../../helpers/Responsive');

var _Responsive2 = _interopRequireDefault(_Responsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      state = _ref.state,
      icon = _ref.icon,
      colorVariant = _ref.colorVariant,
      disabled = _ref.disabled,
      defaultText = _ref.defaultText,
      loadingText = _ref.loadingText,
      errorText = _ref.errorText,
      successText = _ref.successText,
      size = _ref.size,
      active = _ref.active,
      rest = _objectWithoutProperties(_ref, ['children', 'type', 'state', 'icon', 'colorVariant', 'disabled', 'defaultText', 'loadingText', 'errorText', 'successText', 'size', 'active']);

  return React.createElement(
    _Responsive2.default,
    null,
    function (_ref2) {
      var device = _ref2.device;
      return React.createElement(
        _styles.SButton,
        Object.assign({
          options: { type: type, state: state, colorVariant: colorVariant, disabled: disabled, size: size, device: device, active: active },
          disabled: state === 'loading' || state === 'error' || state === 'success' || disabled
        }, rest),
        icon ? React.createElement(
          _styles.Icon,
          { options: { size: size, device: device } },
          icon
        ) : null,
        ' ',
        state === 'loading' ? React.createElement(_CircularProgress2.default, {
          style: {
            height: (0, _utils.getButtonFontSize)(size, device),
            width: (0, _utils.getButtonFontSize)(size, device),
            marginRight: '10px',
            color: type === 'add' ? _colors2.default.secondary.loading : type === 'outline' ? _colors2.default[colorVariant].default : _colors2.default.gray.loading
          }
        }) : null,
        ' ',
        React.createElement(
          'span',
          null,
          (0, _utils.textToRender)(state, children, loadingText, errorText, successText)
        )
      );
    }
  );
};

Button.defaultProps = {
  onClick: function onClick() {},
  type: 'default',
  state: 'default',
  icon: null,
  disabled: false,
  colorVariant: 'primary',
  loadingText: '',
  errorText: '',
  successText: '',
  size: 'default'
};

exports.default = Button;