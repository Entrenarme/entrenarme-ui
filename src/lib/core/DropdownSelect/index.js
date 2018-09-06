// @flow
import * as React from 'react';
import InputLabel from 'material-ui/Input/InputLabel';
import MenuItem from 'material-ui/Menu/MenuItem';
import FormControl from 'material-ui/Form/FormControl';
import ListItemText from 'material-ui/List/ListItemText';
import Select from 'material-ui/Select';
import Checkbox from '../Checkbox';
import Input from 'material-ui/Input';
// import {
//   createMuiTheme,
//   MuiThemeProvider,
//   createGenerateClassName,
//   jssPreset,
// } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';

import colors from '../../helpers/colors';

type Props = {
  items: Array<{ name: string, value: number }>,
  inputTitle: string,
  onChange: Function,
};

type State = {
  currentName: Array<string>,
  openSelect: boolean,
};

// const theme = createMuiTheme({
//   palette: {
//     primary: { main: colors.secondary.default, dark: colors.secondary.default },
//     error: { main: colors.error.default, dark: colors.error.default },
//     text: { primary: colors.gray.placeholder },
//   },
// });

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'ddselect-eui',
// });
// const jss = create(jssPreset());

class DropdownSelect extends React.Component<Props, State> {
  state = {
    currentName: [],
    openSelect: false,
  };

  handleChange = e => this.setState({ currentName: e.target.value });

  handleOpen = e => this.setState({ openSelect: true });

  handleClose = e => {
    this.setState({ openSelect: false });
    const { onChange } = this.props;
    if (onChange) {
      const { currentName } = this.state;
      onChange(currentName);
    }
  };

  render() {
    const { currentName, openSelect } = this.state;
    const { items, inputTitle } = this.props;
    return (
      // <JssProvider jss={jss} generateClassName={generateClassName}>
      //   <MuiThemeProvider theme={theme}>
      <FormControl style={{ width: '100%' }}>
        <InputLabel htmlFor="select-multiple-checkbox">{inputTitle}</InputLabel>
        <Select
          multiple
          open={openSelect}
          value={currentName}
          onOpen={this.handleOpen}
          onChange={this.handleChange}
          onClose={this.handleClose}
          input={<Input id="select-multiple-checkbox" />}
          renderValue={selected => selected.join(', ')}
        >
          {items.map(item => (
            <MenuItem key={item.value} value={item.name}>
              <Checkbox checked={currentName.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      //   </MuiThemeProvider>
      // </JssProvider>
    );
  }
}

export default DropdownSelect;
