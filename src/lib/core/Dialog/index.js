// @flow
import * as React from 'react';
import MDialog from '@material-ui/core/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import styled from 'styled-components';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import colors from '../../helpers/colors';

const theme = createMuiTheme();

const generateClassName = createGenerateClassName({
  productionPrefix: 'dialog-eui',
});
const jss = create(jssPreset());

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

  @media only screen and (max-width: 767px) {
    margin-bottom: 20px;
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

  *:nth-child(2) {
    margin-left: ${props => (props.options.type !== 'small' ? '20px' : '0px')};
  }

  > div {
    display: flex;
    justify-content: ${props =>
      props.options.type !== 'small' ? 'flex-end' : 'space-between'};
    width: ${props => (props.options.type !== 'small' ? 'initial' : '100%')};
  }

  button {
    width: ${props =>
      props.options.type !== 'small'
        ? 'initial'
        : props.options.smallModalButtons
          ? '48% !important'
          : 'initial'};
  }

  @media only screen and (max-width: 767px) {
    margin-top: 20px;

    button {
      width: 100% !important;
    }

    * {
      display: flex;
      flex-direction: column;
    }

    *:nth-child(2) {
      margin-top: 10px;
      margin-left: 0px;
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
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
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
              {footer ? (
                <FooterContainer
                  options={{
                    type,
                    smallModalButtons: Array.isArray(footer.props.children),
                  }}
                >
                  {footer}
                </FooterContainer>
              ) : null}
            </MiddleContainer>
          </ExtendedDialog>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

Dialog.defaultProps = {
  align: 'default',
  type: 'default',
};

export default Dialog;
