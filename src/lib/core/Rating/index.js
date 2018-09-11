// @flow
import * as React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/pro-light-svg-icons';

import colors from '../../helpers/colors';

const MainContainer = styled.div`
  display: flex;

  * {
    font-size: ${props => (props.options.size === 'default' ? '14px' : '32px')};
    margin-right: ${props =>
      props.options.size === 'default' ? '4px' : '8px'};
    color: ${colors.warning.default};
  }
`;

type Props = {
  rating: number,
  size?: 'default' | 'large',
};

const Rating = ({ rating, size }: Props) => {
  const renderStars = () => {
    const iterableArray = times(5, String);

    return iterableArray.map((item, index) => {
      return (
        <FontAwesomeIcon
          key={item}
          icon={
            Math.floor(rating / 2) > index
              ? faStar
              : Math.ceil(rating / 2) > index
                ? faStarHalfAlt
                : faStar
          }
        />
      );
    });
  };

  return <MainContainer options={{ size }}>{renderStars()}</MainContainer>;
};

Rating.defaultProps = {
  size: 'default',
};

export default Rating;
