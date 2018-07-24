'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 11px !important;\n  height: 17px !important;\n  color: white;\n'], ['\n  width: 11px !important;\n  height: 17px !important;\n  color: white;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SFontAwesomeIcon = (0, _styledComponents2.default)(_reactFontawesome.FontAwesomeIcon)(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.options && props.options.rounded ? '\n      width: 43px;\n      height: 43px;\n      background-color: ' + _colors2.default.primary.default + ';\n      border-radius: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  ' : '';
});

var DefaultArrow = function DefaultArrow(_ref) {
  var right = _ref.right,
      rounded = _ref.rounded;
  return React.createElement(
    Container,
    { options: { rounded: rounded } },
    React.createElement(SFontAwesomeIcon, { icon: right ? _freeSolidSvgIcons.faChevronRight : _freeSolidSvgIcons.faChevronLeft })
  );
};

DefaultArrow.defualtProps = {
  right: false,
  rounded: false
};

exports.default = DefaultArrow;