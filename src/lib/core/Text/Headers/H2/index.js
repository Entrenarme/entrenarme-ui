// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../../../helpers/fonts';
import colors from '../../../../helpers/colors';
import { textSizeTransform, marginBottomSize } from '../../utils';
import { getFontWeight } from '../utils';

import Responsive from '../../../../helpers/Responsive';

const normalDesktop = 1.75;

const normalMobile = 1.25;

const sizeModifier = 0.25;

const modifiers = {
  normalDesktop,
  normalMobile,
  sizeModifier,
};

const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-size: ${props =>
    `${textSizeTransform(
      props.options.size,
      props.options.device,
      modifiers,
    )}rem`};
  font-weight: ${props => getFontWeight(props)};
  font-family: ${fonts.mainFont};
  text-align: ${props => props.options.textAlign};
  color: ${props => colors[props.options.color].default};
  margin-top: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  margin-bottom: ${props =>
    `${marginBottomSize(
      props.options.size,
      props.options.device,
      modifiers,
    )}rem`};
`;

type Props = {
  children: React.Node,
  color?: color,
  size?: 'small' | 'medium' | 'large',
  textAlign?: 'left' | 'center' | 'right',
  fontWeight: 'regular' | 'bold' | 'bolder' | 'boldest',
};

const H2 = ({
  children,
  color,
  size,
  textAlign,
  fontWeight,
  ...rest
}: Props) => (
  <Responsive>
    {({ device }) => (
      <StyledH2
        {...rest}
        options={{ color, size, textAlign, fontWeight, device }}
      >
        {children}
      </StyledH2>
    )}
  </Responsive>
);

H2.defaultProps = {
  color: 'primary',
  size: 'medium',
  textAlign: 'left',
  fontWeight: 'bolder',
};

export default H2;
