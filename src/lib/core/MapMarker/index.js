// @flow
import * as React from 'react';
import styled from 'styled-components';

import { RESOURCES_URL } from '../../helpers/config';

const MapMarkerContainer = styled.div`
  width: 40px;
  height: 50px;
  cursor: pointer;
  background-image: ${props =>
    `url(${`${RESOURCES_URL}static/images/list/marker-${props.options.type}-${
      props.options.visited ? 'visited' : 'default'
    }.svg`})`};

  &:hover {
    background-image: ${props =>
      `url(${`${RESOURCES_URL}static/images/list/marker-${props.options.type}${
        props.options.visited ? '-visited' : ''
      }-hover.svg`})`};
  }

  @media only screen and (max-width: 767px) {
    width: 32px;
    height: 40px;
  }
`;

type Props = {
  type: 'trainer' | 'center',
  visited?: boolean,
};

const MapMarker = ({ type, visited }: Props) => (
  <MapMarkerContainer options={{ type, visited }} />
);

MapMarker.defaultProps = {
  type: 'trainer',
  visited: false,
};

export default MapMarker;
