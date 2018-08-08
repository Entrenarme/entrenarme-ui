// @flow
import * as React from 'react';
import styled from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';

import Button from '../Button/index';
import colors from '../../helpers/colors';

const generateClassName = createGenerateClassName({
  productionPrefix: 'togglebuttons-eui',
});
const jss = create(jssPreset());

const MainContainer = styled.div`
  width: 100%;
`;

const LeftButtonContainer = styled.div`
  width: 50%;
  position: relative;
  display: inline-block;
`;

const LeftButton = styled(Button)`
  width: 100%;
  border-radius: 50px 0px 0px 50px !important;

  &:hover {
    background-color: ${colors.primary.active} !important;
  }
`;

const RightButton = styled(Button)`
  width: 50%;
  border-radius: 0px 50px 50px 0px !important;

  &:hover {
    background-color: ${colors.primary.active} !important;
  }
`;

const SeparationBar = styled.div`
  position: absolute;
  top: 22%;
  right: -1px;
  z-index: 20;

  background-color: #000;
  width: 2px;
  height: 55%;
  opacity: 0.15;
`;

type Props = {
  leftText: string,
  leftIcon: React.Node,
  leftOnclick: Function,
  rightText: string,
  rightIcon: React.Node,
  rightOnclick: Function,
};

const ToggleButton = ({
  leftText,
  leftIcon,
  leftOnclick,
  rightText,
  rightIcon,
  rightOnclick,
  ...rest
}: Props) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <MainContainer {...rest}>
      <LeftButtonContainer>
        <LeftButton icon={leftIcon} onClick={leftOnclick}>
          {leftText}
        </LeftButton>
        <SeparationBar />
      </LeftButtonContainer>
      <RightButton icon={rightIcon} onClick={rightOnclick}>
        {rightText}
      </RightButton>
    </MainContainer>
  </JssProvider>
);

export default ToggleButton;
