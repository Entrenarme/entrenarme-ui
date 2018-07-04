// @flow
import * as React from 'react';

type Props = {
  /** A function which accepts itemProps and activeItem as a parameters
   * and renders the desired ui
   */
  children: Function,
  /** Function that will be called when an active item change, either selected or unselected.
   * Will return the active items at the moment
   */
  onChange?: Function,
  /** If we want to support a multiple selection */
  multiple?: boolean,
};

type State = {
  names: { [string]: boolean },
};

class Switch extends React.Component<Props, State> {
  static defaultProps = {
    onChange: () => {},
    multiple: false,
  };

  state = {
    /** this object will be filled each time a children with a name property is clicked.
     * Is empty because by default, we will consider all items to be inactive.
     */
    names: {},
  };

  componentDidUpdate() {
    const { onChange, multiple } = this.props;
    if (onChange)
      onChange(multiple ? this.getActiveItems() : this.getActiveItem());
  }

  setAllNamesToFalse = () => {
    const { names } = this.state;
    if (names && Object.keys(names).length > 0) {
      const allNamesSetToFalse = Object.keys(names).reduce(
        (acc, curr) => ({ ...acc, [curr]: false }),
        {},
      );
      this.setState({ names: allNamesSetToFalse });
    }
  };

  onClick = (e: SyntheticEvent<*>) => {
    const { names } = this.state;
    const { multiple } = this.props;
    const nameClicked = e.target.name;
    if (names && Object.keys(names).length > 0) {
      const indexFound = Object.keys(names).find(
        nameKey => nameKey === nameClicked,
      );
      if (indexFound) {
        // the item clicked is already present on the state
        if (!names[indexFound]) {
          // the item clicked is currently inactive
          if (!multiple) this.setAllNamesToFalse();
          // so we set all the rest items inactive, then switch the clicked one
          // if selection is multiple, don't set the rest to inactive
        }
        // switch the clicked item and exit
        return this.setState(prevState => ({
          names: {
            ...prevState.names,
            [indexFound]: !prevState.names[indexFound],
          },
        }));
      }
    }
    // there are no items or the item clicked is still not on the items state
    if (!multiple) this.setAllNamesToFalse();
    // we set all to false
    // if selection is multiple, don't set the rest to inactive
    // then we create the clicked one and set it to true
    return this.setState(prevState => ({
      names: { ...prevState.names, [nameClicked]: true },
    }));
  };

  getActiveItems(): Array<any> {
    const { names } = this.state;
    if (names && Object.keys(names).length > 0) {
      return Object.keys(names).filter((nameKey: string) => names[nameKey]);
    }
    return [];
  }

  getActiveItem() {
    return this.getActiveItems()[0];
  }

  itemProps = () => ({ onClick: this.onClick });

  render() {
    const { children, multiple } = this.props;
    return children({
      itemProps: this.itemProps,
      activeItem: multiple ? this.getActiveItems() : this.getActiveItem(),
    });
  }
}

export default Switch;
