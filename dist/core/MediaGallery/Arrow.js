var _templateObject = _taggedTemplateLiteral(['\n  z-index: 10;\n  position: absolute;\n  top: ', ';\n  ', ';\n  ', ';\n  cursor: pointer;\n'], ['\n  z-index: 10;\n  position: absolute;\n  top: ', ';\n  ', ';\n  ', ';\n  cursor: pointer;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import DefaultArrow from './DefaultArrow';

var SArrow = styled.div(_templateObject, function (props) {
  return props.options && props.options.rounded ? 'calc(50% - 20px)' : 'calc(50% - 8px)';
}, function (props) {
  return props.options && props.options.right ? 'right: 0' : 'left: 0';
}, function (props) {
  return props.options && props.options.right ? 'margin-right: 15px' : 'margin-left: 15px';
});

var Arrow = function Arrow(_ref) {
  var right = _ref.right,
      component = _ref.component,
      onClick = _ref.onClick,
      rounded = _ref.rounded;
  return React.createElement(
    SArrow,
    { onClick: onClick, options: { right: right, rounded: rounded } },
    component || React.createElement(DefaultArrow, { rounded: rounded, right: right })
  );
};

Arrow.defaultProps = {
  rounded: false,
  right: false
};

export default Arrow;