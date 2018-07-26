'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n'], ['\n  position: relative;\n  width: 100%;\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  -ms-transform: translate(-50%, -50%) !important;\n'], ['\n  position: absolute !important;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) !important;\n  -ms-transform: translate(-50%, -50%) !important;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('../Button/index');

var _index2 = _interopRequireDefault(_index);

var _config = require('../../helpers/config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents2.default.div(_templateObject);

var ExtendedImage = _styledComponents2.default.img(_templateObject2);

var ExtendedButton = (0, _styledComponents2.default)(_index2.default)(_templateObject3);

var MapLink = function MapLink(_ref) {
  var buttonTitle = _ref.buttonTitle,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    MainContainer,
    null,
    _react2.default.createElement(ExtendedImage, {
      alt: 'map',
      src: '' + (_config.RESOURCES_URL + 'static/images/list/map.svg')
    }),
    _react2.default.createElement(
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

exports.default = MapLink;