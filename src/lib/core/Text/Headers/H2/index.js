// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../../../helpers/fonts';
import colors from '../../../../helpers/colors';

const normalDesktop = 1.75;

const normalMobile = 1.25;

const sizeModifier = 0.25;

const textSizeDesktopTransform = props => {
  if (props.l) {
    return normalDesktop + sizeModifier;
  } else if (props.s) {
    return normalDesktop - sizeModifier;
  } else {
    return normalDesktop;
  }
};

const textSizeMobileTransform = props => {
  if (props.l) {
    return normalMobile + sizeModifier;
  } else if (props.s) {
    return normalMobile - sizeModifier;
  } else {
    return normalMobile;
  }
};

const marginBottomSize = props => {
  if (props === 'l') {
    return 1.875;
  } else if (props === 's') {
    return 0.625;
  } else {
    return 1.25;
  }
};

const StyledH2 = styled.h2`
  text-transform: uppercase;
  font-size: ${props => `${textSizeDesktopTransform(props.options)}rem`};
  font-weight: 600;
  font-family: ${fonts.mainFont};
  text-align: ${props => props.options.textAlign};
  color: ${props => colors[props.options.color].default};
  margin-top: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  margin-bottom: ${props =>
    `${marginBottomSize(props.options.marginBottom)}rem`};

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    font-size: ${props => `${textSizeMobileTransform(props.options)}rem`};
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: ${props => `${textSizeMobileTransform(props.options)}rem`};
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-width: 768px) and (max-width: 1223px) {
    /* Styles */
  }

  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    /* Styles */
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
    /* Styles */
  }

  /* ----------- Retina Screens ----------- */
  @media screen and (min-device-width: 1200px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    /* Styles */
  }
`;

type Props = {
  children: React.Node,
  color?: color,
  l?: boolean,
  s?: boolean,
  marginBottom?: 's' | 'm' | 'l',
  textAlign?: 'left' | 'center' | 'right',
};

const H2 = ({
  children,
  color,
  l,
  s,
  marginBottom,
  textAlign,
  ...rest
}: Props) => (
  <StyledH2 {...rest} options={{ color, l, s, marginBottom, textAlign }}>
    {children}
  </StyledH2>
);

H2.defaultProps = {
  color: 'primary',
  l: false,
  s: false,
  marginBottom: 'm',
  textAlign: 'left',
};

export default H2;
