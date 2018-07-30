// @flow
import * as React from 'react';
import styled from 'styled-components';

import { mainFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const MainTabContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;
  text-align: center;
  font-family: ${mainFont};
  font-size: 0.875rem;
  padding: 20px 30px;
  cursor: pointer;
  color: ${props =>
    props.options.isActive ? colors.secondary.default : colors.primary.default};

  * {
    margin: 0;
  }

  &:hover {
    color: ${colors.secondary.default};
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    font-size: 0.75rem;
    padding: 15px 20px;
  }
`;

const SeparatorsContainer = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: absolute;
  top: 0px;
  height: 0.1rem;
  width: ${props => 100 / props.options.numElements}%;
  margin: 0;
  background: ${colors.secondary.default};
  border: none;
  transition: 0.3s ease-in-out;
  margin-left: ${props =>
    `${(100 / props.options.numElements) * props.options.activeElement}%`};
`;

const HorizontalSeparator = styled.hr`
  display: block;
  height: 1px;
  margin: -2px
  border: 0;
  border-top: 2px solid ${colors.gray.light};
  padding: 0;
`;

const MainPanelContainer = styled.div``;

const SinglePanelContainer = styled.div`
  padding: 20px 30px;
`;

type Props = {
  children: React.Node,
};

type State = {
  selectedTab: number,
  setSelectedContent: Function,
};

type TabProps = {
  children: React.Node,
  indexElement: number,
};

type TabListProps = {
  children: React.Node,
};

type TabPanelsProps = {
  children: React.Node,
};

type TabPanelProps = {
  children: React.Node,
};

const SwitchContext = React.createContext();

class SwitchTab extends React.Component<Props, State> {
  static TabList = ({ children }: TabListProps) => (
    <SwitchContext.Consumer>
      {context => {
        let totalTabElements = React.Children.map(
          children,
          (child, index) => child.type === SwitchTab.Tab,
        ).filter(elem => elem);

        totalTabElements = totalTabElements.length;

        let currentIndex = 0;

        return (
          <React.Fragment>
            <MainTabContainer>
              {React.Children.map(
                children,
                child =>
                  child.type === SwitchTab.Tab
                    ? React.cloneElement(child, {
                        indexElement: currentIndex++,
                      })
                    : child,
              )}
            </MainTabContainer>
            <SeparatorsContainer>
              <Slider
                options={{
                  numElements: totalTabElements,
                  activeElement: context.selectedTab,
                }}
              />
              <HorizontalSeparator />
            </SeparatorsContainer>
          </React.Fragment>
        );
      }}
    </SwitchContext.Consumer>
  );

  static Tab = ({ children, indexElement }: TabProps) => (
    <SwitchContext.Consumer>
      {context => (
        <TabContainer
          onClick={() => context.setSelectedContent(indexElement)}
          options={{ isActive: indexElement === context.selectedTab }}
        >
          {children}
        </TabContainer>
      )}
    </SwitchContext.Consumer>
  );

  static TabPanels = ({ children }: TabPanelsProps) => (
    <SwitchContext.Consumer>
      {context => {
        return (
          <MainPanelContainer>
            {React.Children.map(
              children,
              (child, index) =>
                child.type === SwitchTab.TabPanel
                  ? context.selectedTab === index
                    ? React.cloneElement(
                        <SinglePanelContainer>{child}</SinglePanelContainer>,
                      )
                    : null
                  : null,
            )}
          </MainPanelContainer>
        );
      }}
    </SwitchContext.Consumer>
  );

  static TabPanel = ({ children }: TabPanelProps) => children;

  setSelectedContent = (element: number) =>
    this.setState({
      selectedTab: element,
    });

  state = {
    selectedTab: 0,
    setSelectedContent: this.setSelectedContent,
  };

  render() {
    const { children } = this.props;

    return (
      <SwitchContext.Provider value={this.state}>
        {children}
      </SwitchContext.Provider>
    );
  }
}

export default SwitchTab;
