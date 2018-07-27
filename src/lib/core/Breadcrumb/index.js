// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import { regularFont } from '../../helpers/fonts';

const MainContainer = styled.div`
  display: flex;
`;

const LinkContainer = styled.div`
  font-family: ${regularFont};
  font-size: 1rem;
  margin-right: 10px;

  * {
    margin-right: 10px;
    text-decoration: none;
    cursor: ${props => (props.options.disabled ? 'default' : 'pointer')};
    color: ${props =>
      props.options.disabled ? colors.gray.default : colors.gray.placeholder};
    pointer-events: ${props => (props.options.disabled ? 'none' : 'initial')};
  }

  &:hover {
    * {
      color: ${props =>
        props.options.disabled
          ? colors.gray.default
          : colors.secondary.default};
    }
  }

  &::after {
    content: '/';
    color: ${colors.gray.placeholder};
  }

  &:last-child {
    * {
      cursor: default;
      color: ${colors.text};
      margin-right: 0px;
    }
  }

  &:last-child::after {
    content: '';
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
    margin-right: 15px;

    * {
      margin-right: 15px;
    }
  }
`;

type Props = {
  children: React.Node,
};

const Breadcrumb = ({ children }: Props) => {
  return (
    <MainContainer>
      {React.Children.map(children, child => (
        <LinkContainer options={{ disabled: child.props.disabled }}>
          {child}
        </LinkContainer>
      ))}
    </MainContainer>
  );
};

export default Breadcrumb;
