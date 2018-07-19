var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n  background-image: ', ';\n\n  &:hover {\n    background-image: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 32px;\n    height: 40px;\n  }\n'], ['\n  width: 40px;\n  height: 50px;\n  cursor: pointer;\n  background-image: ', ';\n\n  &:hover {\n    background-image: ', ';\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 32px;\n    height: 40px;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import { RESOURCES_URL } from '../../helpers/config';

var MapMarkerContainer = styled.div(_templateObject, function (props) {
  return 'url(' + (RESOURCES_URL + 'static/images/list/marker-' + props.options.type + '-' + (props.options.localVisited ? 'visited' : 'default') + '.svg') + ')';
}, function (props) {
  return 'url(' + (RESOURCES_URL + 'static/images/list/marker-' + props.options.type + (props.options.localVisited ? '-visited' : '') + '-hover.svg') + ')';
});

var MapMarker = function (_React$Component) {
  _inherits(MapMarker, _React$Component);

  function MapMarker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MapMarker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MapMarker.__proto__ || Object.getPrototypeOf(MapMarker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      localVisited: _this.props.visited
    }, _this.handleClick = function () {
      _this.props.callback().then(function (response) {
        _this.setState({ localVisited: true });

        _this.props.onClick('Visited!');
      }).catch(function (error) {
        return console.log(error);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MapMarker, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          type = _props.type,
          rest = _objectWithoutProperties(_props, ['type']);

      var localVisited = this.state.localVisited;


      return React.createElement(MapMarkerContainer, Object.assign({}, rest, {
        options: { type: type, localVisited: localVisited },
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }));
    }
  }]);

  return MapMarker;
}(React.Component);

MapMarker.defaultProps = {
  type: 'trainer',
  visited: false
};

export default MapMarker;