// @flow
import * as React from 'react';
import ReactSlider from 'react-slick';

type Props = {};

const Slider = (props: Props) => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ReactSlider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </ReactSlider>
  );
};

Slider.defaultProps = {};

export default Slider;
