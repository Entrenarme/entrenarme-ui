var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 25px;\n'], ['\n  display: flex;\n  flex-direction: column;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 25px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';

import TextField from '../../core/TextField';
import Switch from '../Switch';

import colors from '../../helpers/colors';

var SearchableSwitchContext = React.createContext();

var Container = styled.div(_templateObject);

var SearchableSwitch = function (_React$Component) {
  _inherits(SearchableSwitch, _React$Component);

  function SearchableSwitch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchableSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchableSwitch.__proto__ || Object.getPrototypeOf(SearchableSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filterValue: ''
    }, _this.filterValueChange = function (e) {
      return _this.setState({ filterValue: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchableSwitch, [{
    key: 'render',
    value: function render() {
      var filterValue = this.state.filterValue;
      var _props = this.props,
          children = _props.children,
          column = _props.column,
          multiple = _props.multiple,
          onChange = _props.onChange,
          placeholder = _props.placeholder;

      return React.createElement(
        Container,
        null,
        React.createElement(TextField, {
          fullWidth: true,
          adornment: React.createElement(FontAwesomeIcon, { icon: faSearch, color: colors.gray.placeholder }),
          placeholder: placeholder,
          onChange: this.filterValueChange
        }),
        React.createElement(
          Switch,
          { column: column, multiple: multiple, onChange: onChange },
          function (_ref2) {
            var itemProps = _ref2.itemProps,
                activeItem = _ref2.activeItem;
            return React.createElement(
              SearchableSwitchContext.Provider,
              { value: { itemProps: itemProps, activeItem: activeItem } },
              React.createElement(
                React.Fragment,
                null,
                children({ filterValue: filterValue })
              )
            );
          }
        )
      );
    }
  }]);

  return SearchableSwitch;
}(React.Component);

SearchableSwitch.defaultProps = {
  column: false,
  multiple: false,
  onChange: function onChange() {},
  placeholder: ''
};

SearchableSwitch.Item = function (_ref3) {
  var children = _ref3.children,
      activeKey = _ref3.activeKey;
  return React.createElement(
    SearchableSwitchContext.Consumer,
    null,
    function (context) {
      return children(context);
    }
  );
};

export default SearchableSwitch;