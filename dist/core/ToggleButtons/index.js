'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50%;\n  position: relative;\n  display: inline-block;\n'], ['\n  width: 50%;\n  position: relative;\n  display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  border-radius: 50px 0px 0px 50px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n'], ['\n  width: 100%;\n  border-radius: 50px 0px 0px 50px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 50%;\n  border-radius: 0px 50px 50px 0px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n'], ['\n  width: 50%;\n  border-radius: 0px 50px 50px 0px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 22%;\n  right: -1px;\n  z-index: 20;\n\n  background-color: #000;\n  width: 2px;\n  height: 55%;\n  opacity: 0.15;\n'], ['\n  position: absolute;\n  top: 22%;\n  right: -1px;\n  z-index: 20;\n\n  background-color: #000;\n  width: 2px;\n  height: 55%;\n  opacity: 0.15;\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../Button/index');

var _index2 = _interopRequireDefault(_index);

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents2.default.div(_templateObject);

var LeftButtonContainer = _styledComponents2.default.div(_templateObject2);

var LeftButton = (0, _styledComponents2.default)(_index2.default)(_templateObject3, _colors2.default.primary.active);

var RightButton = (0, _styledComponents2.default)(_index2.default)(_templateObject4, _colors2.default.primary.active);

var SeparationBar = _styledComponents2.default.div(_templateObject5);

var ToggleButton = function ToggleButton(_ref) {
  var leftText = _ref.leftText,
      leftIcon = _ref.leftIcon,
      leftOnclick = _ref.leftOnclick,
      rightText = _ref.rightText,
      rightIcon = _ref.rightIcon,
      rightOnclick = _ref.rightOnclick,
      rest = _objectWithoutProperties(_ref, ['leftText', 'leftIcon', 'leftOnclick', 'rightText', 'rightIcon', 'rightOnclick']);

  return React.createElement(
    MainContainer,
    rest,
    React.createElement(
      LeftButtonContainer,
      null,
      React.createElement(
        LeftButton,
        { icon: leftIcon, onClick: leftOnclick },
        leftText
      ),
      React.createElement(SeparationBar, null)
    ),
    React.createElement(
      RightButton,
      { icon: rightIcon, onClick: rightOnclick },
      rightText
    )
  );
};

exports.default = ToggleButton;