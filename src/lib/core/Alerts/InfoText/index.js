// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../../helpers/colors';
import { regularFont } from '../../../helpers/fonts';

const setColor = status => {
  switch (status) {
    case 'success':
      return colors.success.default;
    case 'warning':
      return colors.warning.default;
    default:
      return colors.error.default;
  }
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${props => setColor(props.options.type)};
`;

const IconContainer = styled.div`
  display: inherit;
  margin-right: 10px;

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    margin-right: 8px;
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-right: 8px;
  }
`;

const BodyContainer = styled.div`
  font-family: ${regularFont};
  font-size: 0.875rem;

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    font-size: 0.75rem;
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

type Props = {
  text: React.Node,
  icon: React.Node,
  type: 'success' | 'error' | 'warning',
};

const InfoText = ({ text, icon, type }: Props) => {
  return (
    <MainContainer options={{ type }}>
      <IconContainer>{icon}</IconContainer>
      <BodyContainer>{text}</BodyContainer>
    </MainContainer>
  );
};

export default InfoText;
