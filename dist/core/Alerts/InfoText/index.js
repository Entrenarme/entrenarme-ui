var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n\n  color: ', ';\n'], ['\n  display: flex;\n  align-items: center;\n\n  color: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: inherit;\n  margin-right: 10px;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    margin-right: 8px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    margin-right: 8px;\n  }\n'], ['\n  display: inherit;\n  margin-right: 10px;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    margin-right: 8px;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    margin-right: 8px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    font-size: 0.75rem;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n'], ['\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  /* Smartphones (portrait) ----------- */\n  @media only screen and (max-width: 320px) {\n    font-size: 0.75rem;\n  }\n\n  /* iPhone 5/6/6+ ----------- */\n  @media only screen and (min-width: 320px) and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import colors from '../../../helpers/colors';
import { regularFont } from '../../../helpers/fonts';

var setColor = function setColor(status) {
  switch (status) {
    case 'success':
      return colors.success.default;
    case 'warning':
      return colors.warning.default;
    default:
      return colors.error.default;
  }
};

var MainContainer = styled.div(_templateObject, function (props) {
  return setColor(props.options.type);
});

var IconContainer = styled.div(_templateObject2);

var BodyContainer = styled.div(_templateObject3, regularFont);

var InfoText = function InfoText(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      type = _ref.type;

  return React.createElement(
    MainContainer,
    { options: { type: type } },
    React.createElement(
      IconContainer,
      null,
      icon
    ),
    React.createElement(
      BodyContainer,
      null,
      text
    )
  );
};

export default InfoText;