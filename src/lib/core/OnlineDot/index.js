// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';

type OnlineProps = {
  options: {
    online: boolean,
  },
};

const Online = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${(props: OnlineProps) =>
    props.options && props.options.online
      ? colors.success.default
      : colors.error.default};
`;

type Props = {
  online: boolean,
};

const OnlineDot = ({ online }: Props) => <Online options={{ online }} />;

OnlineDot.defaultProps = {
  online: true,
};

export default OnlineDot;
