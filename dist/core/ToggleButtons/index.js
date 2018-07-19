var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 50%;\n  position: relative;\n  display: inline-block;\n'], ['\n  width: 50%;\n  position: relative;\n  display: inline-block;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  width: 100%;\n  border-radius: 50px 0px 0px 50px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n'], ['\n  width: 100%;\n  border-radius: 50px 0px 0px 50px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  width: 50%;\n  border-radius: 0px 50px 50px 0px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n'], ['\n  width: 50%;\n  border-radius: 0px 50px 50px 0px !important;\n\n  &:hover {\n    background-color: ', ' !important;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 22%;\n  right: -1px;\n  z-index: 20;\n\n  background-color: #000;\n  width: 2px;\n  height: 55%;\n  opacity: 0.15;\n'], ['\n  position: absolute;\n  top: 22%;\n  right: -1px;\n  z-index: 20;\n\n  background-color: #000;\n  width: 2px;\n  height: 55%;\n  opacity: 0.15;\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button/index';
import colors from '../../helpers/colors';

var MainContainer = styled.div(_templateObject);

var LeftButtonContainer = styled.div(_templateObject2);

var LeftButton = styled(Button)(_templateObject3, colors.primary.active);

var RightButton = styled(Button)(_templateObject4, colors.primary.active);

var SeparationBar = styled.div(_templateObject5);

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

export default ToggleButton;