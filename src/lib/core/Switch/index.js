// @flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

type Props = {
  children: Function,
  onChange?: Function,
};

type State = {
  names: { string?: boolean },
};

class Switch extends React.Component<Props, State> {
  static defaultProps = {
    onChange: () => {},
  };

  state = {
    names: {},
  };

  componentDidUpdate() {
    console.log('updated');
    this.props.onChange(this.getActiveItem());
  }

  setAllNamesToFalse = () => {
    const { names } = this.state;
    if (names && Object.keys(names).length > 0) {
      const falseNames = Object.keys(names).reduce(
        (acc, curr) => ({ ...acc, [curr]: false }),
        {},
      );
      this.setState({ names: falseNames });
    }
  };

  onClick = e => {
    const { names } = this.state;
    const nameClicked = e.currentTarget.name;
    if (names && Object.keys(names).length > 0) {
      const indexFound = Object.keys(names).find(
        nameKey => nameKey === nameClicked,
      );
      if (indexFound) {
        if (!names[indexFound]) {
          this.setAllNamesToFalse();
        }
        return this.setState(prevState => ({
          names: {
            ...prevState.names,
            [indexFound]: !prevState.names[indexFound],
          },
        }));
      }
    }
    this.setAllNamesToFalse();
    return this.setState(prevState => ({
      names: { ...prevState.names, [nameClicked]: true },
    }));
  };

  getActiveItems() {
    const { names } = this.state;
    if (names && Object.keys(names).length > 0) {
      return Object.keys(names).filter(nameKey => names[nameKey]);
    }
    return [];
  }

  getActiveItem() {
    return this.getActiveItems()[0];
  }

  itemProps = () => ({ onClick: this.onClick });

  render() {
    const { children } = this.props;
    return (
      <Container>
        {children({
          itemProps: this.itemProps,
          activeItem: this.getActiveItem(),
        })}
      </Container>
    );
  }
}

export default Switch;
