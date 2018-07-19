var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  align-items: center;\n  vertical-align: top;\n  height: 30px;\n  overflow: hidden;\n  cursor: pointer;\n\n  margin-right: 10px;\n\n  background-color: ', ';\n  border-radius: 50px;\n'], ['\n  display: inline-flex;\n  align-items: center;\n  vertical-align: top;\n  height: 30px;\n  overflow: hidden;\n  cursor: pointer;\n\n  margin-right: 10px;\n\n  background-color: ', ';\n  border-radius: 50px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.65em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n'], ['\n  cursor: pointer;\n  padding-left: 12px;\n  padding-right: 10px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.65em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 0.875rem;\n  color: ', ';\n  padding: ', '\n  height: 100%;\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: ', ';\n  }\n'], ['\n  font-family: ', ';\n  font-size: 0.875rem;\n  color: ', ';\n  padding: ', '\n  height: 100%;\n  border-left: 1px solid ', ';\n  border-right: 1px solid ', ';\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background-color: ', ';\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  padding-left: 10px;\n  padding-right: 12px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.5em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n'], ['\n  cursor: pointer;\n  padding-left: 10px;\n  padding-right: 12px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n\n  & svg {\n    width: 0.5em !important;\n  }\n\n  &:hover {\n    background-color: ', ';\n  }\n\n  ', ':hover & {\n    background-color: ', ';\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

var MainChipContainer = styled.div(_templateObject, colors.white.default);

var AddActionContainer = styled.div(_templateObject2, colors.primary.light, MainChipContainer, colors.primary.light);

var BodyContainer = styled.div(_templateObject3, regularFont, colors.text, function (props) {
  return props.options.hover ? props.options.leftIcon ? '10px 12px 10px 10px' : '10px 10px 10px 12px' : '10px 12px';
}, colors.gray.light, colors.gray.light, function (props) {
  return props.options.hover ? '' : colors.primary.light;
});

var RemoveActionContainer = styled.div(_templateObject4, colors.primary.light, MainChipContainer, colors.primary.light);

var FilterTag = function FilterTag(_ref) {
  var title = _ref.title,
      callback = _ref.callback,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      rest = _objectWithoutProperties(_ref, ['title', 'callback', 'leftIcon', 'rightIcon']);

  return React.createElement(
    MainChipContainer,
    Object.assign({ onClick: function onClick() {
        return callback();
      } }, rest),
    leftIcon ? React.createElement(
      AddActionContainer,
      null,
      leftIcon
    ) : null,
    React.createElement(
      BodyContainer,
      {
        options: { hover: leftIcon || rightIcon, leftIcon: leftIcon, rightIcon: rightIcon }
      },
      title
    ),
    rightIcon ? React.createElement(
      RemoveActionContainer,
      null,
      rightIcon
    ) : null
  );
};

FilterTag.defaultProps = {};

export default FilterTag;