// @flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-light-svg-icons';

import { RESOURCES_URL } from '../../helpers/config';
import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

const arrowAnimation = keyframes`
  0% {
    opacity: 0;
    left: -300px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  100% {
    opacity: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`;

const MainContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  font-family: ${mainFont};
  font-size: 0.875rem;
  margin-top: 30px;
  text-transform: uppercase;
  text-align: center;
  max-width: 215px;

  color: ${colors.primary.default};

  @media only screen and (min-width: 768px) {
    ${MainContainer}:hover & {
      color: ${colors.secondary.default};
    }
  }
`;

const MainHexagonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  position: relative;
  max-width: 215px;
  max-height: 215px;
`;

const StyledImage = styled.img`
  position: relative;

  width: 100%;
  height: 100%;

  max-width: 215px;
  max-height: 215px;
  background-repeat: no-repeat;
  background-size: 100% auto;

  -webkit-mask: url(${`${RESOURCES_URL}static/images/general/hex_icon_v2.svg`});
`;

const ExtendedIcon = styled(FontAwesomeIcon)`
  position: absolute;
  font-size: 80px;
  color: white;
  z-index: 1;

  opacity: 0;
  left: 0;
  right: 180px;
  top: 0;
  bottom: 0;
  margin: auto;

  @media only screen and (min-width: 768px) {
    ${MainContainer}:hover & {
      animation: ${arrowAnimation} 0.15s linear forwards;
    }
  }

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    font-size: 40px;
  }
`;

const ColorMaskContainer = styled.div`
  @media only screen and (min-width: 768px) {
    ${MainContainer}:hover & {
      background-color: ${colors.secondary.loading};
      position: absolute;
      top: 0;
      left: 0;
      max-width: 215px;
      max-height: 215px;
      width: 100%;
      height: 100%;

      -webkit-mask: url(${`${RESOURCES_URL}static/images/general/hex_icon_v2.svg`});
    }
  }
`;

type Props = {
  url: string,
  title: React.Node,
};

const HexagonImage = ({ url, title }: Props) => {
  return (
    <MainContainer>
      <MainHexagonContainer>
        <StyledImage
          src={`${RESOURCES_URL}profile/150/${url}`}
          options={{ url }}
        />
        <ColorMaskContainer>
          <ExtendedIcon icon={faChevronRight} />
        </ColorMaskContainer>
      </MainHexagonContainer>
      <TitleContainer>{title}</TitleContainer>
    </MainContainer>
  );
};

export default HexagonImage;
