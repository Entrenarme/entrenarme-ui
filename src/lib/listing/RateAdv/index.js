// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../helpers/colors';
import P from '../../core/Text/Paragraph';
import Button from '../../core/Button';

const Wrapper = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type ContainerProps = {
  options: { appendButtonText: ?string },
};

const Container = styled.div`
  background-color: ${colors.gray.light};
  width: 130px;
  height: 70px;
  border-radius: 4px;
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
      <Button fullWidth size="xs" style={{ marginTop: '-2px' }}>
        {appendButtonText}
      </Button>
    )}
  </Wrapper>
);

RatesAdv.defaultProps = {
  appendButtonText: null,
};

export default RatesAdv;
