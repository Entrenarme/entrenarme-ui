// @flow
import * as React from 'react';
import styled from 'styled-components';
import Chip from '@material-ui/core/Chip';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const generateClassName = createGenerateClassName({ productionPrefix: 'eui' });
const jss = create(jssPreset());

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
  title: React.Node,
};

const Tag = ({ title }: Props) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <ExtendedTag label={title} />
    </JssProvider>
  );
};

Tag.defaultProps = {};

export default Tag;
