// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/pro-light-svg-icons';

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
      <Container>
        <TextField
          fullWidth
          adornment={
            <FontAwesomeIcon icon={faSearch} color={colors.gray.placeholder} />
          }
          placeholder={placeholder}
          onChange={this.filterValueChange}
        />
        <Switch column={column} multiple={multiple} onChange={onChange}>
          {({ itemProps, activeItem }) => (
            <SearchableSwitchContext.Provider value={{ itemProps, activeItem }}>
              <React.Fragment>{children({ filterValue })}</React.Fragment>
            </SearchableSwitchContext.Provider>
          )}
        </Switch>
      </Container>
    );
  }
}

export default SearchableSwitch;
