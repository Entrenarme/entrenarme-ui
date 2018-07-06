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
      props.options.localVisited ? 'visited' : 'default'
    }.svg`})`};

  &:hover {
    background-image: ${props =>
      `url(${`${RESOURCES_URL}static/images/list/marker-${props.options.type}${
        props.options.localVisited ? '-visited' : ''
      }-hover.svg`})`};
  }

  @media only screen and (max-width: 767px) {
    width: 32px;
    height: 40px;
  }
`;

type Props = {
  type?: 'trainer' | 'center',
  visited?: boolean,
  callback: Function,
};

type State = {
  localVisited: boolean,
};

class MapMarker extends React.Component<Props, State> {
  state = {
    localVisited: false,
  };

  componentDidMount() {
    if (this.props.visited) {
      this.setState({ localVisited: this.props.visited });
    }
  }

  handleClick = () => {
    this.props
      .callback()
      .then(response => {
        this.setState({ localVisited: true });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { type, ...rest } = this.props;
    const { localVisited } = this.state;

    return (
      <MapMarkerContainer
        {...rest}
        options={{ type, localVisited }}
        onClick={() => this.handleClick()}
      />
    );
  }
}

MapMarker.defaultProps = {
  type: 'trainer',
  visited: false,
};

export default MapMarker;
