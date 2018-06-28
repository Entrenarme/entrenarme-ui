// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

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
  font-size: ${props => `${textSizeDesktopTransform(props.options)}rem`};
  font-weight: 400;
  font-family: ${fonts.regularFont};
  color: ${props => colors.text};

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
  l?: boolean,
  s?: boolean,
};

const P = ({ children, l, s, ...rest }: Props) => (
  <StyledP {...rest} options={{ l, s }}>
    {children}
  </StyledP>
);

P.defaultProps = {
  l: false,
  s: false,
};

export default P;
