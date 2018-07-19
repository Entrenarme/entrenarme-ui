var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .rc-slider-rail {\n    height: 3px;\n  }\n\n  .rc-slider-track {\n    background-color: ', ';\n  }\n\n  .rc-slider-handle {\n    width: 15px;\n    height: 15px;\n    border: 0;\n    box-shadow: 2px 2px 6px 0px ', ';\n  }\n\n  .rc-slider-dot {\n    display: none;\n  }\n\n  .rc-slider-mark-text {\n    font-size: 1rem;\n    margin-top: 5px;\n  }\n'], ['\n  .rc-slider-rail {\n    height: 3px;\n  }\n\n  .rc-slider-track {\n    background-color: ', ';\n  }\n\n  .rc-slider-handle {\n    width: 15px;\n    height: 15px;\n    border: 0;\n    box-shadow: 2px 2px 6px 0px ', ';\n  }\n\n  .rc-slider-dot {\n    display: none;\n  }\n\n  .rc-slider-mark-text {\n    font-size: 1rem;\n    margin-top: 5px;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import { Range } from 'rc-slider';
import times from 'lodash/times';

import colors from '../../helpers/colors';

import 'rc-slider/assets/index.css';

var ExtendedRange = styled(Range)(_templateObject, colors.secondary.default, colors.gray.dark);

var PriceRank = function (_React$Component) {
  _inherits(PriceRank, _React$Component);

  function PriceRank() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PriceRank);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PriceRank.__proto__ || Object.getPrototypeOf(PriceRank)).call.apply(_ref, [this].concat(args))), _this), _this.renderCurrencyMark = function (repetitions) {
      var currency = _this.props.currency;


      var iterableArray = times(repetitions, String);

      return iterableArray.map(function (element) {
        return currency;
      }).join('');
    }, _this.handleChange = function (rank) {
      _this.props.callback(rank);
    }, _this.renderMarks = function () {
      var marks = {};

      var iterableArray = times(4, String);

      iterableArray.forEach(function (element) {
        return marks[element] = _this.renderCurrencyMark(parseInt(element, 10) + 1);
      });

      return marks;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PriceRank, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var priceRank = this.props.priceRank;


      return React.createElement(ExtendedRange, {
        defaultValue: priceRank,
        min: 0,
        max: 3,
        onChange: function onChange(rank) {
          return _this2.handleChange(rank);
        },
        marks: this.renderMarks()
      });
    }
  }]);

  return PriceRank;
}(React.Component);

PriceRank.defaultProps = {
  currency: '€',
  priceRank: [0, 3]
};

export default PriceRank;