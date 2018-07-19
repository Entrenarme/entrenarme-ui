var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n\n  * {\n    font-size: ', ';\n    margin-right: ', ';\n    color: ', ';\n  }\n'], ['\n  display: flex;\n\n  * {\n    font-size: ', ';\n    margin-right: ', ';\n    color: ', ';\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/pro-light-svg-icons';
import { faStar as faFilledStar, faStarHalfAlt } from '@fortawesome/pro-light-svg-icons';

import colors from '../../helpers/colors';

var MainContainer = styled.div(_templateObject, function (props) {
  return props.options.size === 'default' ? '14px' : '32px';
}, function (props) {
  return props.options.size === 'default' ? '4px' : '8px';
}, colors.warning.default);

var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      size = _ref.size;

  var renderStars = function renderStars() {
    var iterableArray = times(5, String);

    return iterableArray.map(function (item, index) {
      return React.createElement(FontAwesomeIcon, {
        key: item,
        icon: Math.floor(rating / 2) > index ? faFilledStar : Math.ceil(rating / 2) > index ? faStarHalfAlt : faStar
      });
    });
  };

  return React.createElement(
    MainContainer,
    { options: { size: size } },
    renderStars()
  );
};

Rating.defaultProps = {
  size: 'default'
};

export default Rating;