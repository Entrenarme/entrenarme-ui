// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
};

type State = {};

class SwitchTab extends React.Component<Props, State> {
  state = {
    selectedTab: null,
    selectedContent: null,
  };

  setSelectedContent = element =>
    this.setState({
      selectedTab: element,
    });

  render() {
    const { children } = this.props;

    return (
      <div>
        <div onClick={() => console.log()}>
          {React.Children.map(children[0].props.children, child => {
            return React.cloneElement(child, {
              selectedTab: this.state.selectedTab,
            });
          })}
        </div>
        <hr />
        <div>
          {React.Children.map(children[1].props.children, child => {
            return React.cloneElement(child, {
              selectedContent: this.state.selectedContent,
            });
          })}
        </div>
      </div>
    );
  }
}

export default SwitchTab;
