var _templateObject = _taggedTemplateLiteral(['\n  width: 11px !important;\n  height: 17px !important;\n  color: white;\n'], ['\n  width: 11px !important;\n  height: 17px !important;\n  color: white;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', ';\n'], ['\n  ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import colors from '../../helpers/colors';

var SFontAwesomeIcon = styled(FontAwesomeIcon)(_templateObject);

var Container = styled.div(_templateObject2, function (props) {
  return props.options && props.options.rounded ? '\n      width: 43px;\n      height: 43px;\n      background-color: ' + colors.primary.default + ';\n      border-radius: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n  ' : '';
});

var DefaultArrow = function DefaultArrow(_ref) {
  var right = _ref.right,
      rounded = _ref.rounded;
  return React.createElement(
    Container,
    { options: { rounded: rounded } },
    React.createElement(SFontAwesomeIcon, { icon: right ? faChevronRight : faChevronLeft })
  );
};

DefaultArrow.defualtProps = {
  right: false,
  rounded: false
};

export default DefaultArrow;