// @flow
import * as React from 'react';
import styled from 'styled-components';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const MainChipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  height: 30px;
  overflow: hidden;
  cursor: pointer;

  margin-right: 10px;

  background-color: ${colors.white.default};
  border-radius: 50px;
`;

const AddActionContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 0.65em !important;
  }

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
  border-left: 1px solid ${colors.gray.light};
  border-right: 1px solid ${colors.gray.light};
  display: flex;
  align-items: center;
  border-radius: ${props =>
    props.options.hover
      ? props.options.leftIcon
        ? '0px 50px 50px 0px'
        : '50px 0px 0px 50px'
      : '50px'};

  &:hover {
    background-color: ${props =>
      props.options.hover ? '' : colors.primary.light};
  }
`;

const RemoveActionContainer = styled.div`
  cursor: pointer;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 0.5em !important;
  }

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
