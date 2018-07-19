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
  itemsToShow: number,
};

type ArrowProps = {
  className?: string,
  style?: Object,
  onClick?: Function,
  icon: React.Node,
  disabled: boolean,
};

const StyledSlider = styled(ReactSlider)`
  .slick-track {
    width: ${props => (props.options.less ? null : '100% !important')};
    display: ${props => (props.options.less ? null : 'flex !important')};
    justify-content: ${props =>
      props.options.less ? null : 'space-between !important'};
  }
`;

const Arrow = ({ className, style, onClick, icon, disabled }: ArrowProps) => {
  if (disabled) {
    return null;
  }

  return (
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
};

const Slider = ({ children, itemsToShow, ...rest }: Props) => {
  const settings = {
    dots: true,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    infinite: React.Children.count(children) >= itemsToShow,
    nextArrow: (
      <Arrow
        icon={faAngleRight}
        disabled={React.Children.count(children) <= itemsToShow}
      />
    ),
    prevArrow: (
      <Arrow
        icon={faAngleLeft}
        disabled={React.Children.count(children) <= itemsToShow}
      />
    ),
  };

  return (
    <StyledSlider
      {...settings}
      options={{ less: React.Children.count(children) >= itemsToShow }}
    >
      {children}
    </StyledSlider>
  );
};

Slider.defaultProps = {};

export default Slider;
