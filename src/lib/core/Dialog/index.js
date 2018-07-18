// @flow
import * as React from 'react';
import MDialog from '@material-ui/core/Dialog';
import styled from 'styled-components';

const ExtendedDialog = styled(MDialog)`
  > div > div {
    width: 550px;
  }
`;

type Props = {
  open: boolean,
  onClose: Function,
};

type State = {
  open: boolean,
};

class Dialog extends React.Component<Props, State> {
  state = {
    open: false,
  };

  render() {
    const { open, onClose } = this.props;

    return (
      <ExtendedDialog open={open} onClose={() => onClose()}>
        bña
      </ExtendedDialog>
    );
  }
}

export default Dialog;
