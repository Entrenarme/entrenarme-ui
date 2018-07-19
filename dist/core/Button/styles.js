var _templateObject = _taggedTemplateLiteral(['\n  min-height: 0px !important;\n  ', ';\n  height: ', ';\n  padding: ', ';\n  box-sizing: border-box;\n  background-color: ', ' !important;\n  ', ';\n  :hover {\n    background-color: ', ' !important;\n  }\n  span {\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    line-height: ', ';\n  }\n'], ['\n  min-height: 0px !important;\n  ', ';\n  height: ', ';\n  padding: ', ';\n  box-sizing: border-box;\n  background-color: ', ' !important;\n  ', ';\n  :hover {\n    background-color: ', ' !important;\n  }\n  span {\n    color: ', ';\n    font-family: ', ';\n    font-size: ', ';\n    line-height: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: 10px;\n'], ['\n  margin-right: 10px;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import MButton from '@material-ui/core/Button';

import * as fonts from '../../helpers/fonts';
import colors from '../../helpers/colors';

import { getBgColor, getColor, getButtonHeight, getButtonPadding, getButtonFontSize, getButtonLineHeight } from './utils';

export var SButton = styled(MButton)(_templateObject, function (props) {
  return props.options.size === 'fullwidth' ? 'width: 100%' : '';
}, function (props) {
  return getButtonHeight(props.options.size, props.options.device);
}, function (props) {
  return getButtonPadding(props.options.size, props.options.device);
}, function (props) {
  return getBgColor(props.options.type, 'default', props.options.state, props.options.disabled, props.options.colorVariant, props.options.active);
}, function (props) {
  return props.options.type === 'outline' ? '\tborder: 2px solid ' + getColor(props.options.type, props.options.state, props.options.colorVariant, props.options.disabled) + ' !important' : props.options.type === 'add' ? 'border: 2px dashed ' + colors.gray.dark + ' !important;' : '';
}, function (props) {
  return getBgColor(props.options.type, 'default', props.options.state, props.options.disabled, props.options.colorVariant, !props.options.active);
}, function (props) {
  return getColor(props.options.type, props.options.state, props.options.colorVariant, props.options.disabled);
}, fonts.mainFont, function (props) {
  return getButtonFontSize(props.options.size, props.options.device);
}, function (props) {
  return getButtonLineHeight(props.options.size, props.options.device);
});

export var Icon = styled.span(_templateObject2);