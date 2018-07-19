// @flow
import * as React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';

import colors from '../../helpers/colors';
import { regularFont } from '../../helpers/fonts';

type Props = {
  currency?: string,
  price?: number,
};

const PriceItem = styled.span`
  color: ${props => (props.mark ? colors.text : colors.gray.default)};
  font-family: ${regularFont};
  font-size: 0.875rem;

  @media only screen and (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

const RelativePrice = ({ currency, price }: Props) => {
  const renderPrice = (price, currency) => {
    const iterableArray = times(4, String);

    return iterableArray.map((item, index) => (
      <PriceItem key={item} mark={price > index}>
        {currency}
      </PriceItem>
    ));
  };

  return <div>{renderPrice(price, currency)}</div>;
};

RelativePrice.defaultProps = {
  currency: '€',
  price: 0,
};

export default RelativePrice;
