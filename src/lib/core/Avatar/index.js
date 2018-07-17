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

const setAvatarURL = (type, url) => {
  switch (type) {
    case 'header':
      return `${RESOURCES_URL}profile/36/${url ? url : 'default.jpg'}`;
    case 'profile':
      return `${RESOURCES_URL}profile/150/${url ? url : 'default.jpg'}`;
    default:
      return `${RESOURCES_URL}profile/40/${url ? url : 'default.jpg'}`;
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

type State = {
  url: string,
  type: 'header' | 'default' | 'profile',
};

class Avatar extends React.Component<Props, State> {
  state = {
    url: setAvatarURL(this.props.type, this.props.url),
    type: this.props.type,
  };

  render() {
    const { url, type } = this.state;

    return <AvatarContainer options={{ url, type }} />;
  }
}

Avatar.defaultProps = {
  type: 'default',
};

export default Avatar;
