// @flow
import * as React from 'react';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './styles/slick-theme.css';
import './styles/slick.css';

type Props = {
  children: React.Node,
};

type ArrowProps = {
  className?: string,
  style?: Object,
  onClick?: Function,
  icon: React.Node,
};

const StyledSlider = styled(ReactSlider)`
  .slick-track {
    width: ${props => (props.options.less ? null : '100% !important')};
    display: ${props => (props.options.less ? null : 'flex !important')};
    justify-content: ${props =>
      props.options.less ? null : 'space-between !important'};
  }
`;

const Arrow = ({ className, style, onClick, icon }: ArrowProps) => (
  <div
    className={className}
    style={{
      ...style,
    }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} />
  </div>
);

const Slider = ({ children, ...rest }: Props) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: React.Children.count(children) >= 3,
    nextArrow: <Arrow icon={faAngleRight} />,
    prevArrow: <Arrow icon={faAngleLeft} />,
  };

  return (
    <StyledSlider
      {...settings}
      options={{ less: React.Children.count(children) >= 3 }}
    >
      {children}
    </StyledSlider>
  );
};

Slider.defaultProps = {};

export default Slider;
