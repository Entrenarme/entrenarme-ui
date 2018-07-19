var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: ', ';\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: 20px;\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: 20px;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import Select from '../../core/Select';

var Container = styled.div(_templateObject, function (props) {
  return props.options.column ? 'column' : 'row';
}, function (props) {
  return props.options.column ? '1fr' : '1fr 1fr';
});

var Switch = function Switch(_ref) {
  var children = _ref.children,
      column = _ref.column,
      rest = _objectWithoutProperties(_ref, ['children', 'column']);

  return React.createElement(
    Container,
    { options: { column: column } },
    React.createElement(
      Select,
      rest,
      children
    )
  );
};

Switch.defaultProps = {
  column: false,
  multiple: false
};

export default Switch;