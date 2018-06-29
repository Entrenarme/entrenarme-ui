// @flow
import * as React from 'react';
import styled from 'styled-components';

import * as fonts from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const normalDesktop = 1;

const normalMobile = 0.875;

const sizeModifier = 0.25;

const textSizeTransform = (size, device) => {
  if (size === 'large') {
    return device === 'desktop'
      ? normalDesktop + sizeModifier
      : normalMobile + sizeModifier;
  } else if (size === 'small') {
    return device === 'desktop'
      ? normalDesktop - sizeModifier
      : normalMobile - sizeModifier;
  } else {
    return device === 'desktop' ? normalDesktop : normalMobile;
  }
};

const marginBottomSize = (size, device) => {
  if (size === 'large') {
    return device === 'desktop' ? 1.875 : 1.25;
  } else if (size === 'small') {
    return device === 'desktop' ? 0.625 : 0.3125;
  } else {
    return device === 'desktop' ? 1.25 : 0.625;
  }
};

const StyledP = styled.p`
  font-size: ${props =>
    `${textSizeTransform(props.options.size, 'desktop')}rem`};
  font-weight: 400;
  font-family: ${fonts.regularFont};
  text-align: ${props => props.options.textAlign};
  color: ${props => colors.text};
  margin-top: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  margin-bottom: ${props =>
    `${marginBottomSize(props.options.size, 'desktop')}rem`};

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    font-size: ${props =>
      `${textSizeTransform(props.options.size, 'mobile')}rem`};
    margin-bottom: ${props =>
      `${marginBottomSize(props.options.size, 'mobile')}rem`};
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (min-width: 320px) and (max-width: 767px) {
    font-size: ${props =>
      `${textSizeTransform(props.options.size, 'mobile')}rem`};
    margin-bottom: ${props =>
      `${marginBottomSize(props.options.size, 'mobile')}rem`};
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
  size?: 'small' | 'medium' | 'large',
  textAlign?: 'left' | 'center' | 'right',
};

const P = ({ children, size, textAlign, ...rest }: Props) => (
  <StyledP {...rest} options={{ size, textAlign }}>
    {children}
  </StyledP>
);

P.defaultProps = {
  size: 'medium',
  textAlign: 'left',
};

export default P;
