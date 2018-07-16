// @flow
import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

import { regularFont } from '../../../helpers/fonts';
import colors from '../../../helpers/colors';

const setColor = (status, elementType) => {
  const colorType = elementType === 'icon' ? 'default' : 'light';

  switch (status) {
    case 'primary':
      return colors.primary[colorType];
    case 'secondary':
      return colors.secondary[colorType];
    case 'success':
      return colors.success[colorType];
    case 'warning':
      return colors.warning[colorType];
    default:
      return colors.error[colorType];
  }
};

const MainContainer = styled.div`
  font-family: ${regularFont};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: red;
  border-radius: 4px;
  padding: 15px 20px;

  background-color: ${props => setColor(props.options.type)};

  > div > div {
    color: ${props => setColor(props.options.type, 'icon')};
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    > div > div {
      align-self: flex-start;
    }

    padding: 15px 20px;
    align-items: flex-start;
  }
`;

const RequiredContent = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 1.375rem;
  margin-right: 20px;

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    font-size: 1.125rem;
    margin-right: 14px;
  }
`;

const TextContainer = styled.div`
  font-size: 1rem;
  color: ${colors.text};

  a {
    color: ${colors.secondary.default} !important;
    text-decoration: none !important;
  }

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

const CloseIconContainer = styled.div`
  font-size: 1.375rem;
  cursor: pointer;
  margin-left: 20px;
  color: ${colors.text};

  /* iPhone 5/6/6+ ----------- */
  @media only screen and (max-width: 767px) {
    font-size: 1.125rem;
  }
`;

type Props = {
  icon: React.Node,
  text: React.Node,
  link?: React.Node,
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  canClose?: boolean,
  onClose?: Function,
};

type State = {
  hideState: boolean,
};

class AlertText extends React.Component<Props, State> {
  state = {
    hideState: false,
  };

  render() {
    const { icon, text, link, type, canClose, ...rest } = this.props;
    const { hideState } = this.state;

    if (hideState) {
      return null;
    }

    return (
      <MainContainer options={{ type }} {...rest}>
        <RequiredContent>
          <IconContainer>{icon}</IconContainer>
          <TextContainer>
            {text} {link}
          </TextContainer>
        </RequiredContent>
        {canClose ? (
          <CloseIconContainer
            onClick={() => {
              this.setState({ hideState: true });
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CloseIconContainer>
        ) : null}
      </MainContainer>
    );
  }
}

AlertText.defaultProps = {
  type: 'primary',
  canClose: false,
  onClose: () => {},
};

export default AlertText;
