// @flow
import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const MainChipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  cursor: pointer;

  background-color: ${colors.white.default};
  border-radius: 50px;
`;

const AddActionContainer = styled.div`
  cursor: pointer;
  padding-left: 12px;
  padding-right: 10px;
  height: 100%;
  line-height: 33px;

  &:hover {
    background-color: ${colors.primary.light};
  }

  ${MainChipContainer}:hover & {
    background-color: ${colors.primary.light};
  }
`;

const BodyContainer = styled.div`
  font-family: ${regularFont};
  font-size: 0.875rem;
  color: ${colors.text};
  padding: ${props =>
    props.options.hover
      ? props.options.leftIcon
        ? '10px 12px 10px 10px'
        : '10px 10px 10px 12px'
      : '10px 12px'}
  height: 100%;
  line-height: 30px;
  border-left: 1px solid ${colors.gray.light};
  border-right: 1px solid ${colors.gray.light};

  &:hover {
    background-color: ${props =>
      props.options.hover ? '' : colors.primary.light};
  }
`;

const RemoveActionContainer = styled.div`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 12px;
  height: 100%;
  line-height: 33px;

  &:hover {
    background-color: ${colors.primary.light};
  }

  ${MainChipContainer}:hover & {
    background-color: ${colors.primary.light};
  }
`;

type Props = {
  title: React.Node,
  leftIcon?: React.Node,
  rightIcon?: React.Node,
  callback: Function,
};

const FilterTag = ({
  title,
  callback,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  return (
    <MainChipContainer onClick={() => callback()} {...rest}>
      {leftIcon ? <AddActionContainer>{leftIcon}</AddActionContainer> : null}
      <BodyContainer
        options={{ hover: leftIcon || rightIcon, leftIcon, rightIcon }}
      >
        {title}
      </BodyContainer>
      {rightIcon ? (
        <RemoveActionContainer>{rightIcon}</RemoveActionContainer>
      ) : null}
    </MainChipContainer>
  );
};

FilterTag.defaultProps = {};

export default FilterTag;
