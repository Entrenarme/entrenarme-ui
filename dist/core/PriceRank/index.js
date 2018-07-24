'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  .rc-slider-rail {\n    height: 3px;\n  }\n\n  .rc-slider-track {\n    background-color: ', ';\n  }\n\n  .rc-slider-handle {\n    width: 15px;\n    height: 15px;\n    border: 0;\n    box-shadow: 2px 2px 6px 0px ', ';\n  }\n\n  .rc-slider-dot {\n    display: none;\n  }\n\n  .rc-slider-mark-text {\n    font-size: 1rem;\n    margin-top: 5px;\n  }\n'], ['\n  .rc-slider-rail {\n    height: 3px;\n  }\n\n  .rc-slider-track {\n    background-color: ', ';\n  }\n\n  .rc-slider-handle {\n    width: 15px;\n    height: 15px;\n    border: 0;\n    box-shadow: 2px 2px 6px 0px ', ';\n  }\n\n  .rc-slider-dot {\n    display: none;\n  }\n\n  .rc-slider-mark-text {\n    font-size: 1rem;\n    margin-top: 5px;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rcSlider = require('rc-slider');

var _times = require('lodash/times');

var _times2 = _interopRequireDefault(_times);

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

require('rc-slider/assets/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExtendedRange = (0, _styledComponents2.default)(_rcSlider.Range)(_templateObject, _colors2.default.secondary.default, _colors2.default.gray.dark);

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


      var iterableArray = (0, _times2.default)(repetitions, String);

      return iterableArray.map(function (element) {
        return currency;
      }).join('');
    }, _this.handleChange = function (rank) {
      _this.props.callback(rank);
    }, _this.renderMarks = function () {
      var marks = {};

      var iterableArray = (0, _times2.default)(4, String);

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

exports.default = PriceRank;