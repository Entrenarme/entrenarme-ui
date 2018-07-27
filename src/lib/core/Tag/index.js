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

type ExtendedTagProps = {
  options: {
    bgcolor: string,
    color: string,
    xs: boolean,
  },
};

const ExtendedTag = styled(Chip)`
  height: 24px !important;
  font-family: ${regularFont} !important;
  font-size: ${(props: ExtendedTagProps) =>
    props.options && props.options.xs ? '0.5625rem' : '0.875rem'} !important;
  background-color: ${(props: ExtendedTagProps) =>
    props.options.bgcolor} !important;

  span {
    color: ${(props: ExtendedTagProps) => props.options.color};
  }

  @media only screen and (max-width: 767px) {
    font-size: 0.75rem !important;
  }
`;

type Props = {
  title: React.Node,
  bgcolor: string,
  color: string,
  xs: boolean,
};

const Tag = ({ title, bgcolor, color, xs }: Props) => {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <ExtendedTag label={title} options={{ bgcolor, color, xs }} />
    </JssProvider>
  );
};

Tag.defaultProps = {
  bgcolor: colors.gray.light,
  color: colors.text,
  xs: false,
};

export default Tag;
