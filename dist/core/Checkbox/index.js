'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 20px !important;\n  width: 20px !important;\n  margin-right: 10px !important;\n  margin-left: 14px !important;\n  svg {\n    height: 20px;\n  }\n'], ['\n  height: 20px !important;\n  width: 20px !important;\n  margin-right: 10px !important;\n  margin-left: 14px !important;\n  svg {\n    height: 20px;\n  }\n']);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _styles = require('@material-ui/core/styles');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _JssProvider = require('react-jss/lib/JssProvider');

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _jss = require('jss');

var _colors = require('../../helpers/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Paragraph = require('../Text/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: { main: _colors2.default.primary.default },
    secondary: { main: _colors2.default.secondary.default }
  }
});

var generateClassName = (0, _styles.createGenerateClassName)({ productionPrefix: 'eui' });
var jss = (0, _jss.create)((0, _styles.jssPreset)());

var SCheckbox = (0, _styledComponents2.default)(_Checkbox2.default)(_templateObject);

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['label']);

  return React.createElement(
    _JssProvider2.default,
    { jss: jss, generateClassName: generateClassName },
    React.createElement(
      _styles.MuiThemeProvider,
      { theme: theme },
      React.createElement(_FormControlLabel2.default, {
        control: React.createElement(SCheckbox, rest),
        label: label ? React.createElement(
          _Paragraph2.default,
          { noMargin: true },
          label
        ) : null
      })
    )
  );
};

Checkbox.defaultProps = {
  label: null
};

exports.default = Checkbox;