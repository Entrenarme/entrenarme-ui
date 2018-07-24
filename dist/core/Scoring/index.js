'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 0.625rem;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    max-width: 100px;\n  }\n'], ['\n  margin-bottom: 0.625rem;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    max-width: 100px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 0.625rem;\n  height: 0.625rem;\n  mask: url(', ');\n  background-color: ', ';\n\n  @media only screen and (max-width: 767px) {\n    width: 0.5rem;\n    height: 0.5rem;\n  }\n'], ['\n  width: 0.625rem;\n  height: 0.625rem;\n  mask: url(', ');\n  background-color: ', ';\n\n  @media only screen and (max-width: 767px) {\n    width: 0.5rem;\n    height: 0.5rem;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  color: ', ';\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 0.3125rem;\n  font-size: 0.75rem;\n\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.625rem;\n\n    max-width: 100px;\n  }\n'], ['\n  font-family: ', ';\n  color: ', ';\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 0.3125rem;\n  font-size: 0.75rem;\n\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.625rem;\n\n    max-width: 100px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: repeat(5, 0.625rem);\n  grid-gap: 0.4375rem;\n\n  @media only screen and (max-width: 767px) {\n    grid-template-columns: repeat(5, 0.5rem);\n    grid-gap: 0.3125rem;\n  }\n'], ['\n  display: grid;\n  grid-template-columns: repeat(5, 0.625rem);\n  grid-gap: 0.4375rem;\n\n  @media only screen and (max-width: 767px) {\n    grid-template-columns: repeat(5, 0.5rem);\n    grid-gap: 0.3125rem;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _config = require('../../helpers/config');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../helpers/fonts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents2.default.div(_templateObject);

var ScoreItem = _styledComponents2.default.div(_templateObject2, _config.RESOURCES_URL + 'static/images/general/hex_icon_v2.svg', function (props) {
  return props.mark ? _colors2.default.secondary.default : _colors2.default.gray.default;
});

var ScoreTitle = _styledComponents2.default.div(_templateObject3, _fonts.mainFont, _colors2.default.text);

var ScoreContainer = _styledComponents2.default.div(_templateObject4);

var Scoring = function Scoring(_ref) {
  var children = _ref.children,
      score = _ref.score,
      rest = _objectWithoutProperties(_ref, ['children', 'score']);

  var renderScore = function renderScore(score) {
    var iterableArray = (0, _times2.default)(5, String);

    return iterableArray.map(function (item, index) {
      return React.createElement(ScoreItem, { key: item, mark: score > index });
    });
  };

  return React.createElement(
    MainContainer,
    null,
    React.createElement(
      ScoreTitle,
      null,
      children
    ),
    React.createElement(
      ScoreContainer,
      null,
      renderScore(score)
    )
  );
};

Scoring.defaultProps = {
  score: 0
};

exports.default = Scoring;