// @flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/pro-light-svg-icons';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const GroupContainer = styled.div`
  > div:not(:first-child) {
    margin-top: 20px;
  }
`;

const MainContainer = styled.div`
  border-radius: 5px;
  background-color: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 20px;

  * {
    margin: 0px;
  }
`;

const ContentContainer = styled.div`
  padding: 20px;

  animation-name: ${fadeIn};
  animation-duration: 0.3s;
`;

const ExtendedIcon = styled(FontAwesomeIcon)`
  font-size: 34px;

  transform: ${props =>
    props.options.open ? 'rotate(180deg)' : 'rotate(0deg)'};

  transition: 0.15s;
`;

type Props = {
  children: React.Node,
  singleShow?: boolean,
  openAction?: boolean,
  closeAction?: boolean,
};

type State = {
  open: boolean,
  activeElements: Array<number>,
};

const SwitchCards = React.createContext();

class ExpandCard extends React.Component<Props, State> {
  state = {
    open: false,
    totalElements: [],
    activeElements: [],
  };

  static defaultProps = {
    singleShow: false,
    openAction: false,
    closeAction: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.openAction !== this.props.openAction) {
      this.setState({ activeElements: [...this.state.totalElements] });
    }

    if (prevProps.closeAction !== this.props.closeAction) {
      this.setState({ activeElements: [] });
    }
  }

  static Element = ({ children, index, style }: Props) => (
    <MainContainer style={style}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { index }),
      )}
    </MainContainer>
  );

  static Title = ({ children, index }: Props) => (
    <SwitchCards.Consumer>
      {context => (
        <TitleContainer onClick={() => context.handleActiveCard(index)}>
          {children}
          <ExtendedIcon
            icon={faAngleDown}
            color="rgba(18,85,102,1)"
            options={{ open: context.state.activeElements.includes(index) }}
          />
        </TitleContainer>
      )}
    </SwitchCards.Consumer>
  );

  static Content = ({ children, index }: Props) => (
    <SwitchCards.Consumer>
      {context => {
        if (context.state.activeElements.includes(index)) {
          return <ContentContainer>{children}</ContentContainer>;
        }

        return null;
      }}
    </SwitchCards.Consumer>
  );

  handleActiveCard = (index: number) => {
    if (this.props.singleShow) {
      this.setState({ activeElements: [index] });
    } else {
      if (this.state.activeElements.includes(index)) {
        this.setState(prevState => ({
          activeElements: prevState.activeElements.filter(
            element => element !== index,
          ),
        }));
      } else {
        this.setState(prevState => ({
          activeElements: [...prevState.activeElements, index],
        }));
      }
    }
  };

  render() {
    const { children, singleShow } = this.props;

    return (
      <SwitchCards.Provider
        value={{
          state: this.state,
          handleActiveCard: this.handleActiveCard,
        }}
      >
        <GroupContainer>
          {React.Children.map(children, (child, index) => {
            if (!this.state.totalElements.includes(index)) {
              this.state.totalElements.push(index);
            }

            return React.cloneElement(child, { index, singleShow });
          })}
        </GroupContainer>
      </SwitchCards.Provider>
    );
  }
}

export default ExpandCard;
