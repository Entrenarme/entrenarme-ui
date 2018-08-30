// @flow
import * as React from 'react';
import styled from 'styled-components';

import { RESOURCES_URL } from '../../helpers/config';

import FullImage from '../MediaGallery/FullImage';

type Props = {
  image: CustomImage,
  imageWidth: string,
  imageHeight: string,
  onLoad: Function,
  className: string,
  style: Object,
  onClick: Function,
  alt: string,
  type: 'gallery' | 'original',
  allowOpen: boolean,
};

type ImgProps = {
  options: {
    imageWidth: string,
    imageHeight: string,
  },
};

const Img = styled.img`
  cursor: pointer;
  ${(props: ImgProps) =>
    props.options.imageWidth &&
    `width: ${props.options.imageWidth}; flex: 1 0 ${
      props.options.imageWidth
    }`};
  ${(props: ImgProps) =>
    props.options.imageHeight && `height: ${props.options.imageHeight}`};
`;

const getSrc = (type: 'gallery' | 'original', src) => {
  if (type === 'gallery') {
    return `${RESOURCES_URL}gallery/260/${src}`;
  }
};

type State = {
  openDialog: boolean,
};

class Image extends React.Component<Props, State> {
  static defaultProps = {
    onLoad: () => {},
    className: '',
    style: {},
    allowOpen: true,
  };

  state = {
    openDialog: false,
  };

  onClick = () => {
    const { onClick } = this.props;
    if (this.props.allowOpen) {
      if (onClick) {
        return onClick();
      }
      this.setState({ openDialog: true });
    }
  };

  onCloseDialog = () => this.setState({ openDialog: false });

  render() {
    const {
      image,
      imageWidth,
      imageHeight,
      onLoad,
      className,
      style,
      alt,
      type,
    } = this.props;
    const { openDialog } = this.state;
    return (
      <React.Fragment>
        <Img
          draggable="false"
          onClick={this.onClick}
          style={style}
          className={className}
          onLoad={onLoad}
          src={getSrc(type, image.value)}
          alt={alt}
          options={{ imageWidth, imageHeight }}
        />
        <FullImage
          open={openDialog}
          image={image}
          onClose={this.onCloseDialog}
        />
      </React.Fragment>
    );
  }
}

export default Image;
