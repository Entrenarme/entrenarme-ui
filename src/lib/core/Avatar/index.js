// @flow
import * as React from 'react';
import styled from 'styled-components';

import { RESOURCES_URL } from '../../helpers/config';

const setAvatarSize = type => {
  switch (type) {
    case 'header':
      return '36px';
    case 'profile':
      return '150px';
    default:
      return '40px';
  }
};

const setAvatarURL = type => {
  switch (type) {
    case 'header':
      return `${RESOURCES_URL}profile/36/default.jpg`;
    case 'profile':
      return `${RESOURCES_URL}profile/150/default.jpg`;
    default:
      return `${RESOURCES_URL}profile/40/default.jpg`;
  }
};

const AvatarContainer = styled.div`
  width: ${props => setAvatarSize(props.options.type)};
  height: ${props => setAvatarSize(props.options.type)};
  border-radius: ${props => setAvatarSize(props.options.type)};
  background-image: url(${props => props.options.url});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

type Props = {
  url?: string,
  type?: 'header' | 'default' | 'profile',
};

type State = {};

class Avatar extends React.Component<Props, State> {
  state = {
    url: setAvatarURL(this.props.type),
    type: 'default',
  };

  componentDidMount() {
    const { url, type } = this.props;

    if (url) {
      this.setState({
        url,
        type,
      });
    }

    this.setState({
      type,
    });
  }

  render() {
    const { url, type } = this.state;
    return <AvatarContainer options={{ url, type }} />;
  }
}

export default Avatar;
