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

const TabsContext = React.createContext();

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
  static TabList = ({ children }) => (
    <TabsContext.Consumer>
      {context => {
        let toalTabElements = React.Children.map(
          children,
          (child, index) => child.type === SwitchTab.Tab,
        );
        toalTabElements = toalTabElements.length;
        let currentIndex = 0;
        console.log(toalTabElements);
        console.log(context.selectedTab);
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
                  numElements: toalTabElements,
                  activeElement: context.selectedTab,
                }}
              />
              <HorizontalSeparator />
            </SeparatorsContainer>
          </React.Fragment>
        );
      }}
    </TabsContext.Consumer>
  );
  static Tab = ({ children, indexElement }) => (
    <TabsContext.Consumer>
      {context => (
        <Tab
          setSelectedContent={context.setSelectedContent}
          selectedTab={context.selectedTab}
          indexElement={indexElement}
        >
          {children}
        </Tab>
      )}
    </TabsContext.Consumer>
  );
  static TabPanels = ({ children }) => children;
  static TabPanel = ({ children }) => children;

  setSelectedContent = element =>
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
      <TabsContext.Provider value={this.state}>{children}</TabsContext.Provider>
    );
    // return (
    //   <div>
    //     <MainTabContainer>
    //       {React.Children.map(children[0].props.children, (child, index) => (
    //         <Tab
    //           setSelectedContent={this.setSelectedContent}
    //           selectedTab={selectedTab}
    //           indexElement={index}
    //         >
    //           {child}
    //         </Tab>
    //       ))}
    //     </MainTabContainer>
    //     <SeparatorsContainer>
    //       <Slider
    //         options={{
    //           numElements: React.Children.count(children[0].props.children),
    //           activeElement: selectedTab,
    //         }}
    //       />
    //       <HorizontalSeparator />
    //     </SeparatorsContainer>
    //     {React.Children.map(children[1].props.children, (child, index) => (
    //       <div
    //         style={{
    //           display: selectedTab === index ? 'block' : 'none',
    //         }}
    //       >
    //         {child}
    //       </div>
    //     ))}
    //   </div>
    // );
  }
}

export default SwitchTab;
