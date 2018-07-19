var _templateObject = _taggedTemplateLiteral(['\n  height: 24px !important;\n  font-family: ', ' !important;\n  font-size: 0.875rem !important;\n  background-color: ', ' !important;\n\n  span {\n    color: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem !important;\n  }\n'], ['\n  height: 24px !important;\n  font-family: ', ' !important;\n  font-size: 0.875rem !important;\n  background-color: ', ' !important;\n\n  span {\n    color: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem !important;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

var ExtendedTag = styled(Chip)(_templateObject, regularFont, colors.gray.light, colors.text);

var Tag = function Tag(_ref) {
  var title = _ref.title;

  return React.createElement(ExtendedTag, { label: title });
};

Tag.defaultProps = {};

export default Tag;