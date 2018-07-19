var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  > div {\n    padding: 0px;\n  }\n\n  box-shadow: none !important;\n  border-radius: 2px !important;\n'], ['\n  > div {\n    padding: 0px;\n  }\n\n  box-shadow: none !important;\n  border-radius: 2px !important;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  div {\n    margin: 0px !important;\n    padding: 25px 30px;\n  }\n\n  div:last-child {\n    padding: 0px;\n  }\n'], ['\n  div {\n    margin: 0px !important;\n    padding: 25px 30px;\n  }\n\n  div:last-child {\n    padding: 0px;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding: 0px !important;\n'], ['\n  padding: 0px !important;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  padding: 0px 30px 25px 30px;\n\n  *:only-child {\n    margin-bottom: 0px;\n  }\n\n  *:last-child {\n    margin-bottom: 0px;\n  }\n'], ['\n  padding: 0px 30px 25px 30px;\n\n  *:only-child {\n    margin-bottom: 0px;\n  }\n\n  *:last-child {\n    margin-bottom: 0px;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-light-svg-icons';

import H4 from '../Text/Headers/H4/index';

var ExtendedGlobalContainer = styled(ExpansionPanel)(_templateObject);

var ExtendedTitle = styled(ExpansionPanelSummary)(_templateObject2);

var ExtendedBody = styled(ExpansionPanelDetails)(_templateObject3);

var BodyContainer = styled.div(_templateObject4);

var ShowCard = function (_React$Component) {
  _inherits(ShowCard, _React$Component);

  function ShowCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShowCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShowCard.__proto__ || Object.getPrototypeOf(ShowCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: null
    }, _this.handleChange = function (panel) {
      return function (event, expanded) {
        _this.setState({
          expanded: expanded ? panel : false
        });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ShowCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          rest = _objectWithoutProperties(_props, ['children', 'title']);

      var expanded = this.state.expanded;


      return React.createElement(
        ExtendedGlobalContainer,
        Object.assign({}, rest, {
          expanded: expanded === 'panel1',
          onChange: this.handleChange('panel1')
        }),
        React.createElement(
          ExtendedTitle,
          { expandIcon: React.createElement(FontAwesomeIcon, { icon: faAngleDown }) },
          React.createElement(
            H4,
            { size: 'small', style: { fontWeight: 600, margin: '0px' } },
            title
          )
        ),
        React.createElement(
          ExtendedBody,
          null,
          React.createElement(
            BodyContainer,
            null,
            children
          )
        )
      );
    }
  }]);

  return ShowCard;
}(React.Component);

ShowCard.defaultProps = {};

export default ShowCard;