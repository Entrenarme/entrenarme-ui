// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  image: CustomImage,
  imageWidth: string,
  imageHeight: string,
  onLoad: Function,
  className: string,
  style: Object,
  onClick: Function,
};

type ImgProps = {
  options: {
    imageWidth: string,
    imageHeight: string,
  },
};

const Img = styled.img`
  ${(props: ImgProps) =>
    props.options.imageWidth &&
    `width: ${props.options.imageWidth}; flex: 1 0 ${
      props.options.imageWidth
    }`};
  ${(props: ImgProps) =>
    props.options.imageHeight && `height: ${props.options.imageHeight}`};
`;

class Image extends React.Component<Props> {
  static defaultProps = {
    onLoad: () => {},
    className: '',
    style: {},
  };

  render() {
    const {
      image,
      imageWidth,
      imageHeight,
      onLoad,
      className,
      style,
      onClick,
    } = this.props;
    return (
      <Img
        draggable="false"
        onClick={onClick}
        style={style}
        className={className}
        onLoad={onLoad}
        src={image.src}
        alt={image.alt}
        options={{ imageWidth, imageHeight }}
      />
    );
  }
}

export default Image;
