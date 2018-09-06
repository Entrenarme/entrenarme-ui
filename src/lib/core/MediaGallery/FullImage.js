// @flow
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
// import {
//   createGenerateClassName,
//   jssPreset,
//   createMuiTheme,
//   MuiThemeProvider,
// } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';

import { RESOURCES_URL } from '../../helpers/config';

type Props = {
  open: boolean,
  image: CustomImage,
  onClose: Function,
};

// const theme = createMuiTheme();

// const generateClassName = createGenerateClassName({
//   productionPrefix: 'fullimage-eui',
// });
// const jss = create(jssPreset());

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
      // <JssProvider jss={jss} generateClassName={generateClassName}>
      //   <MuiThemeProvider theme={theme}>
      <Dialog open={open} onClose={this.onCloseDialog}>
        <img
          src={`${RESOURCES_URL}gallery/original/${image.value}`}
          width="100%"
          alt="detail"
        />
      </Dialog>
      //   </MuiThemeProvider>
      // </JssProvider>
    );
  }
}

export default FullImage;
