var _templateObject = _taggedTemplateLiteral(['\n  .slick-track {\n    width: ', ';\n    display: ', ';\n    justify-content: ', ';\n  }\n'], ['\n  .slick-track {\n    width: ', ';\n    display: ', ';\n    justify-content: ', ';\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import ReactSlider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import styled from 'styled-components';

import './styles/slick-theme.css';
import './styles/slick.css';

var StyledSlider = styled(ReactSlider)(_templateObject, function (props) {
  return props.options.less ? null : '100% !important';
}, function (props) {
  return props.options.less ? null : 'flex !important';
}, function (props) {
  return props.options.less ? null : 'space-between !important';
});

var Arrow = function Arrow(_ref) {
  var className = _ref.className,
      style = _ref.style,
      onClick = _ref.onClick,
      icon = _ref.icon,
      disabled = _ref.disabled;

  if (disabled) {
    return null;
  }

  return React.createElement(
    'div',
    {
      className: className,
      style: Object.assign({}, style),
      onClick: onClick
    },
    React.createElement(FontAwesomeIcon, { icon: icon })
  );
};

var Slider = function Slider(_ref2) {
  var children = _ref2.children,
      itemsToShow = _ref2.itemsToShow,
      rest = _objectWithoutProperties(_ref2, ['children', 'itemsToShow']);

  var settings = {
    dots: true,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    infinite: React.Children.count(children) >= itemsToShow,
    nextArrow: React.createElement(Arrow, {
      icon: faAngleRight,
      disabled: React.Children.count(children) <= itemsToShow
    }),
    prevArrow: React.createElement(Arrow, {
      icon: faAngleLeft,
      disabled: React.Children.count(children) <= itemsToShow
    })
  };

  return React.createElement(
    StyledSlider,
    Object.assign({}, settings, {
      options: { less: React.Children.count(children) >= itemsToShow }
    }),
    children
  );
};

Slider.defaultProps = {};

export default Slider;