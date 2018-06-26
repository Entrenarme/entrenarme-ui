// @flow
import * as React from 'react';
import MButton from '@material-ui/core/Button';
import styled from 'styled-components';

import * as fonts from '../../helpers/fonts';

const SButton = styled(MButton)`
  span {
    font-family: ${fonts.mainFont};
  }
`;

type Props = {
  /** This is what is gonig to be rendered inside the button */
  children: React.Node,
  /** onClick handler passed down to the button */
  onClick?: Function,
};

const Button = ({ children, ...rest }: Props) => (
  <SButton {...rest}>{children}</SButton>
);

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
