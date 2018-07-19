'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: ', ';\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n'], ['\n  color: ', ';\n  font-family: ', ';\n  font-size: 0.875rem;\n\n  @media only screen and (max-width: 767px) {\n    font-size: 0.75rem;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../../helpers/fonts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PriceItem = _styledComponents2.default.span(_templateObject, function (props) {
  return props.mark ? _colors2.default.text : _colors2.default.gray.default;
}, _fonts.regularFont);

var RelativePrice = function RelativePrice(_ref) {
  var currency = _ref.currency,
      price = _ref.price;

  var renderPrice = function renderPrice(price, currency) {
    var iterableArray = (0, _times2.default)(4, String);

    return iterableArray.map(function (item, index) {
      return React.createElement(
        PriceItem,
        { key: item, mark: price > index },
        currency
      );
    });
  };

  return React.createElement(
    'div',
    null,
    renderPrice(price, currency)
  );
};

RelativePrice.defaultProps = {
  currency: '€',
  price: 0
};

exports.default = RelativePrice;