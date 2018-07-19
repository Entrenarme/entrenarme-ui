// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';

const MainContainer = styled.div`
  * {
    display: inline;
  }
`;

const SeeMoreForcedStyles = styled.div`
  cursor: pointer;
  color: ${colors.secondary.default};

  * {
    display: inline;
  }
`;

type Props = {
  maxChars: number,
  actionText: React.Node,
  children: React.Node,
};

type State = {
  seeMore: boolean,
};

class SeeMore extends React.Component<Props, State> {
  state = {
    seeMore: false,
  };

  render() {
    const { maxChars, actionText, children } = this.props;
    const { seeMore } = this.state;

    return (
      <MainContainer>
        {React.Children.map(children, (child, i) => {
          return child.substring(0, seeMore ? children.length : maxChars);
        })}{' '}
        {actionText && !seeMore && children.length > maxChars ? (
          <SeeMoreForcedStyles onClick={() => this.setState({ seeMore: true })}>
            ...{actionText}
          </SeeMoreForcedStyles>
        ) : null}
      </MainContainer>
    );
  }
}

export default SeeMore;
