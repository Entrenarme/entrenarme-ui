'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n\n  * {\n    font-size: ', ';\n    margin-right: ', ';\n    color: ', ';\n  }\n'], ['\n  display: flex;\n\n  * {\n    font-size: ', ';\n    margin-right: ', ';\n    color: ', ';\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _proLightSvgIcons = require('@fortawesome/pro-light-svg-icons');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.options.size === 'default' ? '14px' : '32px';
}, function (props) {
  return props.options.size === 'default' ? '4px' : '8px';
}, _colors2.default.warning.default);

var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      size = _ref.size;

  var renderStars = function renderStars() {
    var iterableArray = (0, _times2.default)(5, String);

    return iterableArray.map(function (item, index) {
      return React.createElement(_reactFontawesome.FontAwesomeIcon, {
        key: item,
        icon: Math.floor(rating / 2) > index ? _freeSolidSvgIcons.faStar : Math.ceil(rating / 2) > index ? _freeSolidSvgIcons.faStarHalfAlt : _proLightSvgIcons.faStar
      });
    });
  };

  return React.createElement(
    MainContainer,
    { options: { size: size } },
    renderStars()
  );
};

Rating.defaultProps = {
  size: 'default'
};

exports.default = Rating;