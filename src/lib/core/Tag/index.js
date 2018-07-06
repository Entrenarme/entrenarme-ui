// @flow
import React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const ExtendedTag = styled(Chip)`
  height: 24px !important;
  font-family: ${regularFont} !important;
  font-size: 0.875rem !important;
  background-color: ${colors.gray.light} !important;

  span {
    color: ${colors.text};
  }

  @media only screen and (max-width: 767px) {
    font-size: 0.75rem !important;
  }
`;

type Props = {
  title: string,
};

const Tag = ({ title }: Props) => {
  return <ExtendedTag label={title} />;
};

Tag.defaultProps = {};

export default Tag;
