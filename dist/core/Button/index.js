function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import colors from '../../helpers/colors';
import { textToRender, getButtonFontSize } from './utils';
import { SButton, Icon } from './styles';

import Responsive from '../../helpers/Responsive';

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
    Responsive,
    null,
    function (_ref2) {
      var device = _ref2.device;
      return React.createElement(
        SButton,
        Object.assign({
          options: { type: type, state: state, colorVariant: colorVariant, disabled: disabled, size: size, device: device, active: active },
          disabled: state === 'loading' || state === 'error' || state === 'success' || disabled
        }, rest),
        icon ? React.createElement(
          Icon,
          { options: { size: size, device: device } },
          icon
        ) : null,
        ' ',
        state === 'loading' ? React.createElement(CircularProgress, {
          style: {
            height: getButtonFontSize(size, device),
            width: getButtonFontSize(size, device),
            marginRight: '10px',
            color: type === 'add' ? colors.secondary.loading : type === 'outline' ? colors[colorVariant].default : colors.gray.loading
          }
        }) : null,
        ' ',
        React.createElement(
          'span',
          null,
          textToRender(state, children, loadingText, errorText, successText)
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

export default Button;