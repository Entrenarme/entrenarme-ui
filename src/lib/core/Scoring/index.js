// @flow
import * as React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';

import { RESOURCES_URL } from '../../helpers/config';
import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

type Props = {
  children: React.Node,
  score?: number,
};

const MainContainer = styled.div`
  margin-bottom: 0.625rem;
`;

const ScoreItem = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  mask: url(${`${RESOURCES_URL}static/images/general/hex_icon_v2.svg`});
  background-color: ${props =>
    props.mark ? colors.secondary.default : colors.gray.default};

  @media only screen and (max-width: 767px) {
    width: 0.5rem;
    height: 0.5rem;
  }
`;

const ScoreTitle = styled.div`
  font-family: ${mainFont};
  color: ${colors.text};
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.3125rem;
  font-size: 0.75rem;

  @media only screen and (max-width: 767px) {
    font-size: 0.625rem;
  }
`;

const ScoreContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.625rem);
  grid-gap: 0.4375rem;

  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(5, 0.5rem);
    grid-gap: 0.3125rem;
  }
`;

const Scoring = ({ children, score, ...rest }: Props) => {
  const renderScore = score => {
    const iterableArray = times(5, String);

    return iterableArray.map((item, index) => (
      <ScoreItem key={item} mark={score > index} />
    ));
  };

  return (
    <MainContainer>
      <ScoreTitle>{children}</ScoreTitle>
      <ScoreContainer>{renderScore(score)}</ScoreContainer>
    </MainContainer>
  );
};

Scoring.defaultProps = {
  score: 0,
};

export default Scoring;
