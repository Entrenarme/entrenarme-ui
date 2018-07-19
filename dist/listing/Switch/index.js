'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: ', ';\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: 20px;\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  display: grid;\n  grid-template-columns: ', ';\n  grid-gap: 20px;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Select = require('../../core/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
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
      _Select2.default,
      rest,
      children
    )
  );
};

Switch.defaultProps = {
  column: false,
  multiple: false
};

exports.default = Switch;