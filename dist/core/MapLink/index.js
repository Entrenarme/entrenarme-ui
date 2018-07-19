var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n'], ['\n  position: relative;\n  width: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  -ms-transform: translate(-50%, -50%) !important;\n'], ['\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  -ms-transform: translate(-50%, -50%) !important;\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';

import Button from '../Button/index';
import { RESOURCES_URL } from '../../helpers/config';

var MainContainer = styled.div(_templateObject);

var ExtendedImage = styled.img(_templateObject2);

var ExtendedButton = styled(Button)(_templateObject3);

var MapLink = function MapLink(_ref) {
  var buttonTitle = _ref.buttonTitle,
      onClick = _ref.onClick;

  return React.createElement(
    MainContainer,
    null,
    React.createElement(ExtendedImage, {
      alt: 'map',
      src: '' + (RESOURCES_URL + 'static/images/list/map.svg')
    }),
    React.createElement(
      ExtendedButton,
      { type: 'outline', onClick: function (_onClick) {
          function onClick() {
            return _onClick.apply(this, arguments);
          }

          onClick.toString = function () {
            return _onClick.toString();
          };

          return onClick;
        }(function () {
          return onClick();
        }) },
      buttonTitle
    )
  );
};

MapLink.defaultProps = {};

export default MapLink;