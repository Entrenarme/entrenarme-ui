// @flow
import * as React from 'react';
import styled from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
// import {
//   createGenerateClassName,
//   jssPreset,
//   createMuiTheme,
//   MuiThemeProvider,
// } from '@material-ui/core/styles';

import colors from '../../helpers/colors';
import P from '../../core/Text/Paragraph';
import Button from '../../core/Button';

import devices from '../../helpers/breakpoints';

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'rates-eui',
// });
// const jss = create(jssPreset());
// const theme = createMuiTheme();

const Wrapper = styled.div`
  width: 80px;
  height: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${devices.ipad}) {
    width: 130px;
    height: 95px;
  }
`;

type ContainerProps = {
  options: { appendButtonText: ?string, mobile: boolean },
};

const Container = styled.div`
  background-color: ${colors.gray.light};
  width: 100%;
  height: 100%;
  max-height: 70px;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  @media (${devices.ipad}) {
    border-top-right-radius: initial;
    border-bottom-right-radius: initial;
  }

  ${(props: ContainerProps) =>
    props.options && props.options.appendButtonText
      ? `
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `
      : ''};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

type Props = {
  topText: React.Node,
  bottomText: React.Node,
  amount: number,
  currency: string,
  appendButtonText: ?string,
  mobile: boolean,
};

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const RatesAdv = ({
  topText,
  bottomText,
  amount,
  currency,
  appendButtonText,
}: Props) => (
  // <JssProvider jss={jss} generateClassName={generateClassName}>
  //   <MuiThemeProvider theme={theme}>
  <Wrapper>
    <Container options={{ appendButtonText }}>
      <P size="xs" color={colors.primary.default} textAlign="center" noMargin>
        {topText}
      </P>
      <Price>
        <P
          size="large"
          color={colors.primary.default}
          font="main"
          textAlign="center"
          noMargin
        >
          {amount}
        </P>
        <P
          size="medium"
          color={colors.primary.default}
          font="main"
          textAlign="center"
          noMargin
        >
          {currency}
        </P>
      </Price>
      <P size="xs" color={colors.primary.default} textAlign="center" noMargin>
        {bottomText}
      </P>
    </Container>
    {appendButtonText && (
      <Button
        fullWidth
        size="xs"
        style={{ marginTop: '-2px', pointerEvents: 'none' }}
        data-testid="appended-button"
      >
        {appendButtonText}
      </Button>
    )}
  </Wrapper>
  //   </MuiThemeProvider>
  // </JssProvider>
);

RatesAdv.defaultProps = {
  appendButtonText: null,
  mobile: false,
};

export default RatesAdv;
