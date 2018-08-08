// @flow
import React from 'react';
import styled from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import Button from '../Button/index';
import { RESOURCES_URL } from '../../helpers/config';

const generateClassName = createGenerateClassName({
  productionPrefix: 'maplink-eui',
});
const jss = create(jssPreset());

const theme = createMuiTheme();

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
  onClick: Function,
};

const MapLink = ({ buttonTitle, onClick }: Props) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <MainContainer>
          <ExtendedImage
            alt="map"
            src={`${`${RESOURCES_URL}static/images/list/map.svg`}`}
          />
          <ExtendedButton type="outline" onClick={() => onClick()}>
            {buttonTitle}
          </ExtendedButton>
        </MainContainer>
      </MuiThemeProvider>
    </JssProvider>
  );
};

MapLink.defaultProps = {};

export default MapLink;
