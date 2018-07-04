// @flow
import * as React from 'react';
import MCheckbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const styles = {
  root: {
    color: 'yellow',
    '&$checked': {
      color: 'red',
    },
  },
  checked: {},
};

const Checkbox = ({ classes }) => (
  <MCheckbox
    classes={{
      root: classes.root,
      checked: classes.checked,
    }}
  />
);

export default withStyles(styles)(Checkbox);
