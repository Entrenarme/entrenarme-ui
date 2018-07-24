// @flow
import * as React from 'react';
import styled from 'styled-components';

import { mainFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const MainTabContainer = styled.div`
  display: flex;
`;

const TabContainer = styled.div`
  font-family: ${mainFont};
  font-size: 0.875rem;
  padding: 20px 30px;
  cursor: pointer;
  height: 48px;
  color: ${props =>
    props.options.isActive ? colors.secondary.default : colors.primary.default};
  border-bottom: ${props =>
    props.options.isActive
      ? `2px solid ${colors.secondary.default}`
      : colors.primary.default};

  &:hover {
    color: ${colors.secondary.default};
  }
`;

const HorizontalSeparator = styled.hr`
  display: block;
  height: 1px;
  margin: -2px
  border: 0;
  border-top: 2px solid ${colors.gray.light};
  padding: 0;
`;

type Props = {
  children: React.Node,
};

type State = {
  selectedTab: ?number,
};

type TabProps = {
  children: React.Node,
  setSelectedContent: Function,
  indexElement: number,
  selectedTab: ?number,
};

const Tab = ({
  children,
  setSelectedContent,
  indexElement,
  selectedTab,
}: TabProps) => {
  return (
    <TabContainer
      onClick={() => setSelectedContent(indexElement)}
      options={{ isActive: indexElement === selectedTab }}
    >
      {children}
    </TabContainer>
  );
};

class SwitchTab extends React.Component<Props, State> {
  state = {
    selectedTab: null,
  };

  setSelectedContent = element =>
    this.setState({
      selectedTab: element,
    });

  render() {
    const { children } = this.props;
    const { selectedTab } = this.state;

    return (
      <div>
        <MainTabContainer>
          {React.Children.map(children[0].props.children, (child, index) => (
            <Tab
              setSelectedContent={this.setSelectedContent}
              selectedTab={selectedTab}
              indexElement={index}
            >
              {child}
            </Tab>
          ))}
        </MainTabContainer>
        <HorizontalSeparator />
        {React.Children.map(children[1].props.children, (child, index) => (
          <div
            style={{
              display: selectedTab === index ? 'block' : 'none',
            }}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
}

export default SwitchTab;
