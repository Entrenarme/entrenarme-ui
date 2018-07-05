// @flow
import React from 'react';
import styled from 'styled-components';

import Button from '../Button/index';
import { RESOURCES_URL } from '../../helpers/config';

const MainContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

const ExtendedImage = styled.img`
  width: 100%;
`;

const ExtendedButton = styled(Button)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  -ms-transform: translate(-50%, -50%) !important;
`;

type Props = {
  buttonTitle: string,
};

const MapLink = ({ buttonTitle }: Props) => {
  return (
    <MainContainer>
      <ExtendedImage
        alt="map"
        src={`${`${RESOURCES_URL}static/images/list/map.svg`}`}
      />
      <ExtendedButton type="outline">{buttonTitle}</ExtendedButton>
    </MainContainer>
  );
};

MapLink.defaultProps = {};

export default MapLink;
