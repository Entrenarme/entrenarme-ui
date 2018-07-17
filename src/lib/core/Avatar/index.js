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

const Avatar = ({ url, type }: Props) => {
  return <AvatarContainer options={{ url, type }} />;
};

Avatar.defaultProps = {
  url: `${RESOURCES_URL}profile/150/default.jpg`,
  type: 'default',
};

export default Avatar;
