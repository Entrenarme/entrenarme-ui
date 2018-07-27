'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .slick-track {\n    width: ', ';\n    display: ', ';\n    justify-content: ', ';\n  }\n'], ['\n  .slick-track {\n    width: ', ';\n    display: ', ';\n    justify-content: ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

require('./styles/slick-theme.css');

require('./styles/slick.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSlider = (0, _styledComponents2.default)(_reactSlick2.default)(_templateObject, function (props) {
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
      disabled = _ref.disabled,
      invertedArrows = _ref.invertedArrows;

  if (disabled) {
    return null;
  }

  return React.createElement(
    'div',
    {
      className: invertedArrows ? className + ' slick-secondary' : className,
      style: Object.assign({}, style),
      onClick: onClick
    },
    React.createElement(_reactFontawesome.FontAwesomeIcon, { icon: icon })
  );
};

var Slider = function Slider(_ref2) {
  var children = _ref2.children,
      itemsToShow = _ref2.itemsToShow,
      disableDots = _ref2.disableDots,
      invertedArrows = _ref2.invertedArrows,
      rest = _objectWithoutProperties(_ref2, ['children', 'itemsToShow', 'disableDots', 'invertedArrows']);

  var settings = {
    dots: disableDots ? false : true,
    slidesToShow: itemsToShow,
    slidesToScroll: itemsToShow,
    infinite: React.Children.count(children) >= itemsToShow,
    nextArrow: React.createElement(Arrow, {
      invertedArrows: invertedArrows,
      icon: _freeSolidSvgIcons.faAngleRight,
      disabled: React.Children.count(children) <= itemsToShow
    }),
    prevArrow: React.createElement(Arrow, {
      invertedArrows: invertedArrows,
      icon: _freeSolidSvgIcons.faAngleLeft,
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

Slider.defaultProps = {
  disableDots: false,
  invertedArrows: false
};

exports.default = Slider;