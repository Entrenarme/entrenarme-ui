'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Switch.__proto__ || Object.getPrototypeOf(Switch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      /** this object will be filled each time a children with a name property is clicked.
       * Is empty because by default, we will consider all items to be inactive.
       */
      names: {}
    }, _this.setAllNamesToFalse = function () {
      var names = _this.state.names;

      if (names && Object.keys(names).length > 0) {
        var allNamesSetToFalse = Object.keys(names).reduce(function (acc, curr) {
          return Object.assign({}, acc, _defineProperty({}, curr, false));
        }, {});
        _this.setState({ names: allNamesSetToFalse });
      }
    }, _this.onClick = function (e) {
      var names = _this.state.names;
      var multiple = _this.props.multiple;

      var nameClicked = e.target.name || e.currentTarget.name;
      if (names && Object.keys(names).length > 0) {
        var indexFound = Object.keys(names).find(function (nameKey) {
          return nameKey === nameClicked;
        });
        if (indexFound) {
          // the item clicked is already present on the state
          if (!names[indexFound]) {
            // the item clicked is currently inactive
            if (!multiple) _this.setAllNamesToFalse();
            // so we set all the rest items inactive, then switch the clicked one
            // if selection is multiple, don't set the rest to inactive
          }
          // switch the clicked item and exit
          return _this.setState(function (prevState) {
            return {
              names: Object.assign({}, prevState.names, _defineProperty({}, indexFound, !prevState.names[indexFound]))
            };
          });
        }
      }
      // there are no items or the item clicked is still not on the items state
      if (!multiple) _this.setAllNamesToFalse();
      // we set all to false
      // if selection is multiple, don't set the rest to inactive
      // then we create the clicked one and set it to true
      return _this.setState(function (prevState) {
        return {
          names: Object.assign({}, prevState.names, _defineProperty({}, nameClicked, true))
        };
      });
    }, _this.itemProps = function () {
      return { onClick: _this.onClick };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Switch, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _props = this.props,
          onChange = _props.onChange,
          multiple = _props.multiple;

      if (onChange) onChange(multiple ? this.getActiveItems() : this.getActiveItem());
    }
  }, {
    key: 'getActiveItems',
    value: function getActiveItems() {
      var names = this.state.names;

      if (names && Object.keys(names).length > 0) {
        return Object.keys(names).filter(function (nameKey) {
          return names[nameKey];
        });
      }
      return [];
    }
  }, {
    key: 'getActiveItem',
    value: function getActiveItem() {
      return this.getActiveItems()[0];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          multiple = _props2.multiple;

      return children({
        itemProps: this.itemProps,
        activeItem: multiple ? this.getActiveItems() : this.getActiveItem()
      });
    }
  }]);

  return Switch;
}(React.Component);

Switch.defaultProps = {
  onChange: function onChange() {},
  multiple: false
};
exports.default = Switch;