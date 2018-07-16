// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import colors from '../../helpers/colors';

type Props = {
  right: boolean,
  rounded: boolean,
};

type IconProps = {
  options: {
    rounded: boolean,
  },
};

const SFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 11px !important;
  height: 17px !important;
  color: white;
`;

const Container = styled.div`
  ${(props: IconProps) =>
    props.options && props.options.rounded
      ? `
      width: 43px;
      height: 43px;
      background-color: ${colors.primary.default};
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  `
      : ''};
`;

const DefaultArrow = ({ right, rounded }: Props) => (
  <Container options={{ rounded }}>
    <SFontAwesomeIcon icon={right ? faChevronRight : faChevronLeft} />
  </Container>
);

DefaultArrow.defualtProps = {
  right: false,
  rounded: false,
};

export default DefaultArrow;
