// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

type Props = {
  children: React.Node,
};

const normalDesktop = 1;

const normalMobile = 0.875;

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

const StyledP = styled.p`
  font-size: ${props => `${textSizeDesktopTransform(props)}rem`};
  font-weight: 400;
  font-family: ${fonts.regularFont};
  color: ${colors.text};

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    font-size: ${props => `${textSizeMobileTransform(props)}rem`};
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: ${props => `${textSizeMobileTransform(props)}rem`};
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

const P = ({ children, ...rest }: Props) => (
  <StyledP {...rest}>{children}</StyledP>
);

P.defaultProps = {};

export default P;
