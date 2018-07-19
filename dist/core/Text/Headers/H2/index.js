var _templateObject = _taggedTemplateLiteral(['\n  text-transform: uppercase;\n  font-size: ', ';\n  font-weight: 600;\n  font-family: ', ';\n  text-align: ', ';\n  color: ', ';\n  margin-top: 0rem;\n  margin-left: 0rem;\n  margin-right: 0rem;\n  margin-bottom: ', ';\n'], ['\n  text-transform: uppercase;\n  font-size: ', ';\n  font-weight: 600;\n  font-family: ', ';\n  text-align: ', ';\n  color: ', ';\n  margin-top: 0rem;\n  margin-left: 0rem;\n  margin-right: 0rem;\n  margin-bottom: ', ';\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../../../helpers/fonts';
import colors from '../../../../helpers/colors';
import { textSizeTransform, marginBottomSize } from '../../utils';

import Responsive from '../../../../helpers/Responsive';

var normalDesktop = 1.75;

var normalMobile = 1.25;

var sizeModifier = 0.25;

var modifiers = {
  normalDesktop: normalDesktop,
  normalMobile: normalMobile,
  sizeModifier: sizeModifier
};

var StyledH2 = styled.h2(_templateObject, function (props) {
  return textSizeTransform(props.options.size, props.options.device, modifiers) + 'rem';
}, fonts.mainFont, function (props) {
  return props.options.textAlign;
}, function (props) {
  return colors[props.options.color].default;
}, function (props) {
  return marginBottomSize(props.options.size, props.options.device, modifiers) + 'rem';
});

var H2 = function H2(_ref) {
  var children = _ref.children,
      color = _ref.color,
      size = _ref.size,
      textAlign = _ref.textAlign,
      rest = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'textAlign']);

  return React.createElement(
    Responsive,
    null,
    function (_ref2) {
      var device = _ref2.device;
      return React.createElement(
        StyledH2,
        Object.assign({}, rest, { options: { color: color, size: size, textAlign: textAlign, device: device } }),
        children
      );
    }
  );
};

H2.defaultProps = {
  color: 'primary',
  size: 'medium',
  textAlign: 'left'
};

export default H2;