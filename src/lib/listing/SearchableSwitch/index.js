// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import TextField from '../../core/TextField';
import Switch from '../Switch';

import colors from '../../helpers/colors';

const SearchableSwitchContext = React.createContext();

type Props = {
  column?: boolean,
  children: Function,
  multiple?: boolean,
  onChange?: Function,
  placeholder?: React.Node,
};

type State = {
  filterValue: string,
};

const generateClassName = createGenerateClassName({
  productionPrefix: 'button-eui',
});
const jss = create(jssPreset());

const theme = createMuiTheme();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;
`;

class SearchableSwitch extends React.Component<Props, State> {
  static defaultProps = {
    column: false,
    multiple: false,
    onChange: () => {},
    placeholder: '',
  };

  static Item = ({ children, activeKey }) => (
    <SearchableSwitchContext.Consumer>
      {context => children(context)}
    </SearchableSwitchContext.Consumer>
  );

  state = {
    filterValue: '',
  };

  filterValueChange = e => this.setState({ filterValue: e.target.value });

  render() {
    const { filterValue } = this.state;
    const { children, column, multiple, onChange, placeholder } = this.props;
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Container>
            <TextField
              fullWidth
              adornment={
                <FontAwesomeIcon
                  icon={faSearch}
                  color={colors.gray.placeholder}
                />
              }
              placeholder={placeholder}
              onChange={this.filterValueChange}
            />
            <Switch column={column} multiple={multiple} onChange={onChange}>
              {({ itemProps, activeItem }) => (
                <SearchableSwitchContext.Provider
                  value={{ itemProps, activeItem }}
                >
                  <React.Fragment>{children({ filterValue })}</React.Fragment>
                </SearchableSwitchContext.Provider>
              )}
            </Switch>
          </Container>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default SearchableSwitch;
