// @flow
import * as React from 'react';
import ReactSlider from 'react-slick';

import 'react-slick/lib/css/slick-theme.css';
import 'react-slick/lib/css/slick.css';

type Props = {};

const Slider = ({ children, ...rest }: Props) => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

Slider.defaultProps = {};

export default Slider;
