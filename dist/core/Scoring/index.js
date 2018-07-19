var _templateObject = _taggedTemplateLiteral(['\n  margin-bottom: 0.625rem;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    max-width: 100px;\n  }\n'], ['\n  margin-bottom: 0.625rem;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    max-width: 100px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 0.625rem;\n  height: 0.625rem;\n  mask: url(', ');\n  background-color: ', ';\n\n  @media only screen and (max-width: 767px) {\n    width: 0.5rem;\n    height: 0.5rem;\n  }\n'], ['\n  width: 0.625rem;\n  height: 0.625rem;\n  mask: url(', ');\n  background-color: ', ';\n\n  @media only screen and (max-width: 767px) {\n    width: 0.5rem;\n    height: 0.5rem;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  color: ', ';\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 0.3125rem;\n  font-size: 0.75rem;\n\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.625rem;\n\n    max-width: 100px;\n  }\n'], ['\n  font-family: ', ';\n  color: ', ';\n  text-transform: uppercase;\n  font-weight: 600;\n  margin-bottom: 0.3125rem;\n  font-size: 0.75rem;\n\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 190px;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.625rem;\n\n    max-width: 100px;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: grid;\n  grid-template-columns: repeat(5, 0.625rem);\n  grid-gap: 0.4375rem;\n\n  @media only screen and (max-width: 767px) {\n    grid-template-columns: repeat(5, 0.5rem);\n    grid-gap: 0.3125rem;\n  }\n'], ['\n  display: grid;\n  grid-template-columns: repeat(5, 0.625rem);\n  grid-gap: 0.4375rem;\n\n  @media only screen and (max-width: 767px) {\n    grid-template-columns: repeat(5, 0.5rem);\n    grid-gap: 0.3125rem;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import times from 'lodash/times';

import { RESOURCES_URL } from '../../helpers/config';
import colors from '../../helpers/colors';
import { mainFont } from '../../helpers/fonts';

var MainContainer = styled.div(_templateObject);

var ScoreItem = styled.div(_templateObject2, RESOURCES_URL + 'static/images/general/hex_icon_v2.svg', function (props) {
  return props.mark ? colors.secondary.default : colors.gray.default;
});

var ScoreTitle = styled.div(_templateObject3, mainFont, colors.text);

var ScoreContainer = styled.div(_templateObject4);

var Scoring = function Scoring(_ref) {
  var children = _ref.children,
      score = _ref.score,
      rest = _objectWithoutProperties(_ref, ['children', 'score']);

  var renderScore = function renderScore(score) {
    var iterableArray = times(5, String);

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

export default Scoring;