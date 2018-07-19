var _templateObject = _taggedTemplateLiteral(['\n  height: 16px !important;\n  width: 16px !important;\n  margin-right: 10px !important;\n  margin-left: 14px !important;\n  svg {\n    height: 16px;\n  }\n'], ['\n  height: 16px !important;\n  width: 16px !important;\n  margin-right: 10px !important;\n  margin-left: 14px !important;\n  svg {\n    height: 16px;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import * as React from 'react';
import MRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import P from '../Text/Paragraph';

var theme = createMuiTheme({
  palette: {
    primary: { main: colors.primary.default },
    secondary: { main: colors.secondary.default }
  }
});

var SRadio = styled(MRadio)(_templateObject);

var Radio = function Radio(_ref) {
  var label = _ref.label,
      rest = _objectWithoutProperties(_ref, ['label']);

  return React.createElement(
    MuiThemeProvider,
    { theme: theme },
    React.createElement(FormControlLabel, {
      control: React.createElement(SRadio, rest),
      label: label ? React.createElement(
        P,
        { noMargin: true },
        label
      ) : null
    })
  );
};

Radio.defaultProps = {
  label: null
};

export default Radio;