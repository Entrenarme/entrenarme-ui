// @flow
import * as React from 'react';
import styled from 'styled-components';

import colors from '../../../helpers/colors';
import { RESOURCES_URL } from '../../../helpers/config';

import P from '../../Text/Paragraph/index';
import H4 from '../../Text/Headers/H4/index';

const setColor = (status, origin) => {
  const colorType = origin === 'icon' ? 'default' : 'light';

  switch (status) {
    case 'info':
      return colors.secondary[colorType];
    case 'error':
      return colors.error[colorType];
    default:
      return colors.warning[colorType];
  }
};

const MainContainer = styled.div`
  ${props =>
    props.options.alignment === 'vertical'
      ? `display: flex;
          flex-direction: column;`
      : `display: grid;
        grid-template:
      ${props.options.button ? '1fr / 50px 1fr auto' : '1fr / 50px 1fr'};
  grid-gap: 20px;`};
  align-items: center;
  border-radius: 4px;

  padding: 30px;
  background-color: ${props => setColor(props.options.type)};

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    grid-template: ${props =>
      props.options.button
        ? 'repeat(3, auto) / auto'
        : 'repeat(2, auto) / auto'}
    justify-items: center;
    padding: 20px 15px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props =>
    props.options.alignment === 'vertical' ? '27px' : '22px'};
  margin-bottom: ${props =>
    props.options.alignment === 'vertical' ? '30px' : ''};
  width: ${props => (props.options.alignment === 'vertical' ? '80px' : '50px')};
  height: ${props =>
    props.options.alignment === 'vertical' ? '80px' : '50px'};
  mask: url(${`${RESOURCES_URL}static/images/general/hex_icon_v2.svg`});
  background-color: ${props => setColor(props.options.type, 'icon')};
  color: ${colors.white.default};
`;

const BodyContainer = styled.div`
  h4 {
    margin-bottom: 8px !important;
    color: ${props => setColor(props.options.type, 'icon')};
    font-weight: 500 !important;
  }

  p {
    margin: 0px !important;
  }

  p:last-child {
    margin: 0px !important;
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    h4 {
      text-align: center;
      font-size: 1rem !important;
    }

    p {
      text-align: center;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  > div {
    margin-top: 10px;
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const ButtonContainer = styled.div`
  align-self: self-start;

  button {
    background-color: ${props =>
      setColor(props.options.type, 'icon')} !important;
  }

  button:hover {
    background-color: ${props =>
      setColor(props.options.type, 'icon')} !important;
    opacity: 0.9;
  }
`;

type Props = {
  icon: React.Node,
  title: React.Node,
  text: React.Node,
  tags?: Array<React.Node>,
  button?: React.Node,
  type?: 'info' | 'warning' | 'error',
  alignment: ?'vertical',
};

const AlertBox = ({
  icon,
  title,
  text,
  tags,
  button,
  type,
  alignment,
  ...rest
}: Props) => {
  return (
    <MainContainer options={{ type, button, alignment }} {...rest}>
      <IconContainer options={{ type, alignment }}>{icon}</IconContainer>
      <BodyContainer options={{ type }}>
        <H4 textAlign={alignment === 'vertical' ? 'center' : 'left'}>
          {title}
        </H4>
        <P>{text}</P>
        {tags ? <TagsContainer>{tags}</TagsContainer> : null}
      </BodyContainer>
      {button ? (
        <ButtonContainer options={{ type }}>{button}</ButtonContainer>
      ) : null}
    </MainContainer>
  );
};

AlertBox.defaultProps = {
  button: null,
  type: 'info',
  alignment: null,
};

export default AlertBox;
