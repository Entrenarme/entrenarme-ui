// @flow
import * as React from 'react';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import 'react-slick/lib/css/slick-theme.css';
import 'react-slick/lib/css/slick.css';

type Props = {
  children: React.Node,
};

type ArrowProps = {
  className?: string,
  style?: Object,
  onClick?: Function,
  icon: React.Node,
};

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
    infinite: React.Children.count(children) >= 3 ? true : false,
    nextArrow: <Arrow icon={faAngleRight} />,
    prevArrow: <Arrow icon={faAngleLeft} />,
  };

  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

Slider.defaultProps = {};

export default Slider;
