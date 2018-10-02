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
  cursor: pointer !important;
  color: ${colors.secondary.default} !important;

  * {
    display: inline !important;
    color: ${colors.secondary.default} !important;
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
          if (typeof children === 'string') {
            return child.substring(0, seeMore ? children.length : maxChars);
          } else {
            return React.cloneElement(children, {
              children: child.props.children.substring(
                0,
                seeMore ? children.props.children.length : maxChars,
              ),
            });
          }
        })}

        {actionText &&
        !seeMore &&
        (typeof children === 'string'
          ? children.length
          : children.props.children.length) > maxChars ? (
          <SeeMoreForcedStyles onClick={() => this.setState({ seeMore: true })}>
            {' '}
            ...
            {actionText}
          </SeeMoreForcedStyles>
        ) : null}
      </MainContainer>
    );
  }
}

export default SeeMore;
