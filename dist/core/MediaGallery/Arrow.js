'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  z-index: 10;\n  position: absolute;\n  top: ', ';\n  ', ';\n  ', ';\n  cursor: pointer;\n'], ['\n  z-index: 10;\n  position: absolute;\n  top: ', ';\n  ', ';\n  ', ';\n  cursor: pointer;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _DefaultArrow = require('./DefaultArrow');

var _DefaultArrow2 = _interopRequireDefault(_DefaultArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SArrow = _styledComponents2.default.div(_templateObject, function (props) {
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
    component || React.createElement(_DefaultArrow2.default, { rounded: rounded, right: right })
  );
};

Arrow.defaultProps = {
  rounded: false,
  right: false
};

exports.default = Arrow;