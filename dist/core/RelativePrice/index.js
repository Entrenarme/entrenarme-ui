var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n'], ['\n  color: ', ';\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';

import colors from '../../helpers/colors';
import { regularFont } from '../../helpers/fonts';

var PriceItem = styled.span(_templateObject, function (props) {
  return props.mark ? colors.text : colors.gray.default;
}, regularFont);

var RelativePrice = function RelativePrice(_ref) {
  var currency = _ref.currency,
      price = _ref.price;

  var renderPrice = function renderPrice(price, currency) {
    var iterableArray = times(4, String);

    return iterableArray.map(function (item, index) {
      return React.createElement(
        PriceItem,
        { key: item, mark: price > index },
        currency
      );
    });
  };

  return React.createElement(
    'div',
    null,
    renderPrice(price, currency)
  );
};

RelativePrice.defaultProps = {
  currency: '€',
  price: 0
};

export default RelativePrice;