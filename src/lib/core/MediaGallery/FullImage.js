// @flow
import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { RESOURCES_URL } from '../../helpers/config';

type Props = {
  open: boolean,
  image: CustomImage,
  onClose: Function,
};

class FullImage extends React.Component<Props> {
  static defaultProps = {
    onClose: null,
  };

  onCloseDialog = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { image, open } = this.props;
    return (
      <MuiThemeProvider theme={createMuiTheme()}>
        <Dialog open={open} onClose={this.onCloseDialog}>
          <img
            src={`${RESOURCES_URL}gallery/original/${image.value}`}
            width="100%"
            alt="detail"
          />
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default FullImage;
