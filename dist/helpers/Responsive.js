'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var queries = ['(max-width: 320px)', '(max-width: 767px) and (min-width: 320px)', '(max-width: 1223px) and (min-width: 768px)', '(max-width: 1824px) and (min-width: 1224px)', '(min-width: 1824px)'];

var mediaDictionary = {
  0: 'mobile',
  1: 'iphone',
  2: 'ipad',
  3: 'desktop',
  4: 'large_desktop'
};

var Responsive = function (_React$Component) {
  _inherits(Responsive, _React$Component);

  function Responsive() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Responsive);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Responsive.__proto__ || Object.getPrototypeOf(Responsive)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      device: 'mobile'
    }, _this.mqlQueries = {}, _this.setQueryState = function (currentQueryName) {
      return _this.setState({ device: currentQueryName });
    }, _this.queryChange = function (mql) {
      if (mql.matches) {
        _this.setQueryState(mediaDictionary[queries.findIndex(function (query) {
          return query === mql.media;
        })]);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Responsive, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initQueries();
    }
  }, {
    key: 'initQueries',
    value: function initQueries() {
      var _this2 = this;

      queries.forEach(function (query, index) {
        _this2.mqlQueries['mql' + index] = window.matchMedia(query);
        _this2.mqlQueries['mql' + index].addListener(_this2.queryChange);
        _this2.queryChange(_this2.mqlQueries['mql' + index]);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this.mqlQueries).forEach(function (query) {
        _this3.mqlQueries[query].removeListener(_this3.queryChange(query));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var device = this.state.device;

      return children({ device: device });
    }
  }]);

  return Responsive;
}(React.Component);

exports.default = Responsive;