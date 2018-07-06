// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/pro-light-svg-icons';

import { regularFont } from '../../helpers/fonts';
import colors from '../../helpers/colors';

const MainChipContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  overflow: hidden;

  background-color: ${colors.white.default};
  border-radius: 50px;
`;

const AddActionContainer = styled.div`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 8px;
  height: 100%;
  line-height: 30px;

  &:hover {
    background-color: ${colors.gray.default};
  }
`;

const BodyContainer = styled.div`
  font-family: ${regularFont};
  font-size: 0.875rem;
  color: ${colors.text};
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;
  line-height: 30px;
  border-left: 1px solid ${colors.gray.light};
  border-right: 1px solid ${colors.gray.light};
  cursor: default;

  &:hover {
    background-color: ${colors.gray.default};
  }
`;

const RemoveActionContainer = styled.div`
  cursor: pointer;
  padding-left: 8px;
  padding-right: 10px;
  height: 100%;
  line-height: 30px;

  &:hover {
    background-color: ${colors.gray.default};
  }
`;

type Props = {
  title: string,
  addCallback?: Function,
  removeCallback?: Function,
};

const FilterTag = ({ title, addCallback, removeCallback, ...rest }: Props) => {
  return (
    <MainChipContainer {...rest}>
      {addCallback ? (
        <AddActionContainer onClick={() => addCallback()}>
          <FontAwesomeIcon icon={faPlus} color={colors.text} />
        </AddActionContainer>
      ) : null}
      <BodyContainer>{title}</BodyContainer>
      {removeCallback ? (
        <RemoveActionContainer onClick={() => removeCallback()}>
          <FontAwesomeIcon icon={faTimes} color={colors.text} />
        </RemoveActionContainer>
      ) : null}
    </MainChipContainer>
  );
};

FilterTag.defaultProps = {};

export default FilterTag;
