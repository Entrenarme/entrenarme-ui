var _templateObject = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template: ', '\n  grid-gap: 20px;\n  align-items: center;\n  border-radius: 4px;\n\n  padding: 30px;\n  background-color: ', ';\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    grid-template: ', '\n    justify-items: center;\n    padding: 20px 15px;\n  }\n'], ['\n  display: grid;\n  grid-template: ', '\n  grid-gap: 20px;\n  align-items: center;\n  border-radius: 4px;\n\n  padding: 30px;\n  background-color: ', ';\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    grid-template: ', '\n    justify-items: center;\n    padding: 20px 15px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  align-self: self-start;\n  justify-content: center;\n  font-size: 22px;\n  width: 50px;\n  height: 50px;\n  mask: url(', ');\n  background-color: ', ';\n  color: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  align-self: self-start;\n  justify-content: center;\n  font-size: 22px;\n  width: 50px;\n  height: 50px;\n  mask: url(', ');\n  background-color: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  h5 {\n    margin-bottom: 8px !important;\n    color: ', ';\n    font-weight: 400 !important;\n    font-size: 1.125rem !important;\n  }\n\n  p {\n    margin: 0px !important;\n  }\n\n  p:last-child {\n    margin: 0px !important;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    h5 {\n      text-align: center;\n      font-size: 1rem !important;\n    }\n\n    p {\n      text-align: center;\n    }\n  }\n'], ['\n  h5 {\n    margin-bottom: 8px !important;\n    color: ', ';\n    font-weight: 400 !important;\n    font-size: 1.125rem !important;\n  }\n\n  p {\n    margin: 0px !important;\n  }\n\n  p:last-child {\n    margin: 0px !important;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    h5 {\n      text-align: center;\n      font-size: 1rem !important;\n    }\n\n    p {\n      text-align: center;\n    }\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n\n  > div {\n    margin-top: 10px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    justify-content: center;\n  }\n'], ['\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n\n  > div {\n    margin-top: 10px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (max-width: 767px) {\n    justify-content: center;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  align-self: self-start;\n\n  button {\n    background-color: ', ' !important;\n  }\n\n  button:hover {\n    background-color: ', ' !important;\n    opacity: 0.9;\n  }\n'], ['\n  align-self: self-start;\n\n  button {\n    background-color: ', ' !important;\n  }\n\n  button:hover {\n    background-color: ', ' !important;\n    opacity: 0.9;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import colors from '../../../helpers/colors';
import { RESOURCES_URL } from '../../../helpers/config';

import P from '../../Text/Paragraph/index';
import H5 from '../../Text/Headers/H5/index';

var setColor = function setColor(status, origin) {
  var colorType = origin === 'icon' ? 'default' : 'light';

  switch (status) {
    case 'info':
      return colors.secondary[colorType];
    default:
      return colors.warning[colorType];
  }
};

var MainContainer = styled.div(_templateObject, function (props) {
  return props.options.button ? '1fr / 50px 1fr auto' : '1fr / 50px 1fr';
}, function (props) {
  return setColor(props.options.type);
}, function (props) {
  return props.options.button ? 'repeat(3, auto) / auto' : 'repeat(2, auto) / auto';
});

var IconContainer = styled.div(_templateObject2, RESOURCES_URL + 'static/images/general/hex_icon_v2.svg', function (props) {
  return setColor(props.options.type, 'icon');
}, colors.white.default);

var BodyContainer = styled.div(_templateObject3, function (props) {
  return setColor(props.options.type, 'icon');
});

var TagsContainer = styled.div(_templateObject4);

var ButtonContainer = styled.div(_templateObject5, function (props) {
  return setColor(props.options.type, 'icon');
}, function (props) {
  return setColor(props.options.type, 'icon');
});

var AlertBox = function AlertBox(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      text = _ref.text,
      tags = _ref.tags,
      button = _ref.button,
      type = _ref.type,
      rest = _objectWithoutProperties(_ref, ['icon', 'title', 'text', 'tags', 'button', 'type']);

  return React.createElement(
    MainContainer,
    Object.assign({ options: { type: type, button: button } }, rest),
    React.createElement(
      IconContainer,
      { options: { type: type } },
      icon
    ),
    React.createElement(
      BodyContainer,
      { options: { type: type } },
      React.createElement(
        H5,
        null,
        title
      ),
      React.createElement(
        P,
        null,
        text
      ),
      tags ? React.createElement(
        TagsContainer,
        null,
        tags
      ) : null
    ),
    button ? React.createElement(
      ButtonContainer,
      { options: { type: type } },
      button
    ) : null
  );
};

AlertBox.defaultProps = {
  button: null,
  type: 'info'
};

export default AlertBox;