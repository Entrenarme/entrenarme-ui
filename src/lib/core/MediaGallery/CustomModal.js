// @flow
import * as React from 'react';
import styled from 'styled-components';
import Fade from 'material-ui/transitions/Fade';
import { default as MaterialDialog } from 'material-ui/Dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';

const ExtendedModal = styled(MaterialDialog)`
  background-color: rgba(0, 0, 0, 0.8);

  > div:nth-child(2) {
    position: initial;
  }
`;

const ContainerDivIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    top: 10px;
    right: 10px;
  }
`;

type Props = {
  open: boolean,
  onClose: Function,
};

type State = {};

class ProfileImageDialog extends React.Component<Props, State> {
  transition = (props: Object) => <Fade {...props} />;

  render() {
    return (
      <ExtendedModal
        open={this.props.open}
        onClose={() => {
          this.props.onClose();
        }}
        transition={this.transition}
      >
        <ContainerDivIcon>
          <FontAwesomeIcon
            icon={faTimes}
            style={{
              fontSize: '25px',
              verticalAlign: 'middle',
              cursor: 'pointer',
              color: '#fff',
              opacity: 0.8,
            }}
            onClick={() => this.props.onClose()}
          />
        </ContainerDivIcon>

        {this.props.children}
      </ExtendedModal>
    );
  }
}

export default ProfileImageDialog;
