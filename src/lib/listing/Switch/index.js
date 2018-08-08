// @flow
import * as React from 'react';
import styled from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import Select from '../../core/Select';

type ContainerProps = {
  options: {
    column: boolean,
  },
};

const generateClassName = createGenerateClassName({
  productionPrefix: 'button-eui',
});
const jss = create(jssPreset());

const Container = styled.div`
  display: flex;
  flex-direction: ${(props: ContainerProps) =>
    props.options.column ? 'column' : 'row'};
  display: grid;
  grid-template-columns: ${(props: ContainerProps) =>
    props.options.column ? '1fr' : '1fr 1fr'};
  grid-gap: 20px;
`;

type Props = {
  children: Function,
  column?: boolean,
  multiple?: boolean,
};

const Switch = ({ children, column, ...rest }: Props) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MuiThemeProvider>
      <Container options={{ column }}>
        <Select {...rest}>{children}</Select>
      </Container>
    </MuiThemeProvider>
  </JssProvider>
);

Switch.defaultProps = {
  column: false,
  multiple: false,
};

export default Switch;
