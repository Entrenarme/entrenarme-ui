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

import Responsive from '../../helpers/Responsive';

type WrapperProps = {
  options: {
    device: Device,
  },
};

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'rates-eui',
// });
// const jss = create(jssPreset());
// const theme = createMuiTheme();

const Wrapper = styled.div`
  width: ${(props: WrapperProps) =>
    props.options &&
    props.options.device &&
    (props.options.device.includes('desktop') ||
      props.options.device.includes('ipad'))
      ? '130px'
      : '80px'};
  height: ${(props: WrapperProps) =>
    props.options &&
    props.options.device &&
    (props.options.device.includes('desktop') ||
      props.options.device.includes('ipad'))
      ? '95px'
      : '55px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type ContainerProps = {
  options: { appendButtonText: ?string, mobile: boolean },
};

const Container = styled.div`
  background-color: ${colors.gray.light};
  width: 100%;
  height: 100%;
  max-height: 70px;
  ${(props: ContainerProps) =>
    props.options && props.options.mobile
      ? `
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
  `
      : 'border-radius: 4px'};
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
  mobile,
}: Props) => (
  // <JssProvider jss={jss} generateClassName={generateClassName}>
  //   <MuiThemeProvider theme={theme}>
  <Responsive>
    {({ device }) => (
      <Wrapper options={{ device }}>
        <Container options={{ appendButtonText, mobile }}>
          <P
            size="xs"
            color={colors.primary.default}
            textAlign="center"
            noMargin
          >
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
          <P
            size="xs"
            color={colors.primary.default}
            textAlign="center"
            noMargin
          >
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
    )}
  </Responsive>
  //   </MuiThemeProvider>
  // </JssProvider>
);

RatesAdv.defaultProps = {
  appendButtonText: null,
  mobile: false,
};

export default RatesAdv;
