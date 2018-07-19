var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  * {\n    display: inline;\n  }\n'], ['\n  * {\n    display: inline;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  color: ', ';\n\n  * {\n    display: inline;\n  }\n'], ['\n  cursor: pointer;\n  color: ', ';\n\n  * {\n    display: inline;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';

var MainContainer = styled.div(_templateObject);

var SeeMoreForcedStyles = styled.div(_templateObject2, colors.secondary.default);

var SeeMore = function (_React$Component) {
  _inherits(SeeMore, _React$Component);

  function SeeMore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SeeMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SeeMore.__proto__ || Object.getPrototypeOf(SeeMore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      seeMore: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SeeMore, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          maxChars = _props.maxChars,
          actionText = _props.actionText,
          children = _props.children;
      var seeMore = this.state.seeMore;


      return React.createElement(
        MainContainer,
        null,
        React.Children.map(children, function (child, i) {
          return child.substring(0, seeMore ? children.length : maxChars);
        }),
        ' ',
        actionText && !seeMore && children.length > maxChars ? React.createElement(
          SeeMoreForcedStyles,
          { onClick: function onClick() {
              return _this2.setState({ seeMore: true });
            } },
          '...',
          actionText
        ) : null
      );
    }
  }]);

  return SeeMore;
}(React.Component);

export default SeeMore;