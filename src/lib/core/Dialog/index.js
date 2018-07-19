// @flow
import * as React from 'react';
import MDialog from '@material-ui/core/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import styled from 'styled-components';

import colors from '../../helpers/colors';

const setDialogSize = type => {
  switch (type) {
    case 'large':
      return '650px';
    case 'small':
      return '400px';
    default:
      return '550px';
  }
};

const ExtendedDialog = styled(MDialog)`
  > div:nth-child(2) {
    width: ${props => setDialogSize(props.options.type)};
    padding: 30px;
    border-radius: 4px;
  }

  @media only screen and (max-width: 767px) {
    > div:nth-child(2) {
      width: 100%;
      padding: 20px;
      margin: 10px;
      border-radius: 4px;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  * {
    margin-bottom: 0px !important;
  }

  svg {
    font-size: 20px;
    color: ${colors.primary.default};
    cursor: pointer;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;

  * {
    text-align: ${props =>
      props.options.align === 'center' ? 'center' : 'initial'};
  }

  align-items: ${props =>
    props.options.align === 'center' ? 'center' : 'initial'};
`;

const BodyContainer = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;

  *:only-child {
    margin-bottom: 0px;
  }

  *:last-child {
    margin-bottom: 0px;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 30px;

  @media only screen and (max-width: 767px) {
    * {
      display: flex;
      flex-direction: column;
    }

    flex-direction: column;
  }
`;

type Props = {
  header?: React.Node,
  body: React.Node,
  footer?: React.Node,
  open: boolean,
  onClose: Function,
  align?: 'default' | 'center',
  type?: 'large' | 'default' | 'small',
};

class Dialog extends React.Component<Props, State> {
  render() {
    const {
      header,
      body,
      footer,
      open,
      onClose,
      type,
      align,
      ...rest
    } = this.props;

    return (
      <ExtendedDialog
        open={open}
        onClose={() => onClose()}
        options={{ type }}
        {...rest}
      >
        <HeaderContainer>
          {header ? header : <div />}
          <FontAwesomeIcon icon={faTimes} onClick={() => onClose()} />
        </HeaderContainer>
        <MiddleContainer options={{ align }}>
          <BodyContainer>{body}</BodyContainer>
          {footer ? <FooterContainer>{footer}</FooterContainer> : null}
        </MiddleContainer>
      </ExtendedDialog>
    );
  }
}

Dialog.defaultProps = {
  align: 'default',
  type: 'default',
};

export default Dialog;
