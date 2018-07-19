// @flow
import * as React from 'react';
import MediaQuery from 'react-responsive';

import { RESOURCES_URL } from '../../helpers/config';

type Props = {
  alt: string,
  name: string,
  type: string,
  original?: boolean,
  lazy?: boolean,
  size?: number,
};

const Desktop = props => (
  <MediaQuery
    {...props}
    minWidth={props.type === 'cover' ? 1600 : 1024}
    values={{ deviceWidth: 0 }}
  />
);
const Tablet = props => (
  <MediaQuery
    {...props}
    minWidth={props.type === 'cover' ? 1024 : 768}
    maxWidth={props.type === 'cover' ? 1599 : 1023}
    values={{ deviceWidth: 0 }}
  />
);
const Mobile = props => (
  <MediaQuery
    {...props}
    minWidth={props.type === 'cover' ? 639 : 375}
    maxWidth={props.type === 'cover' ? 1023 : 767}
    values={{ deviceWidth: 0 }}
  />
);
const SmallMobile = props => (
  <MediaQuery
    {...props}
    maxWidth={props.type === 'cover' ? 639 : 374}
    values={{ deviceWidth: 0 }}
  />
);

const getSize = (type: string, device: string) => {
  switch (type) {
    case 'cover':
      switch (device) {
        case 'desktop':
          return '1920';
        case 'tablet':
          return '1280';
        case 'mobile':
          return '640';
        default:
          return '640';
      }
    case 'gallery':
      switch (device) {
        case 'desktop':
          return '260';
        case 'tablet':
          return '260';
        case 'mobile':
          return '260';
        default:
          return '260';
      }
    default:
      switch (device) {
        case 'desktop':
          return '150';
        case 'tablet':
          return '150';
        case 'mobile':
          return '150';
        default:
          return '150';
      }
  }
};

class MediaQueryPic extends React.Component<Props, *> {
  render() {
    const { alt, name, type, original, lazy, size } = this.props;
    if (original) {
      let imageSrc = {};
      if (lazy) {
        imageSrc = { 'data-lazy': `${RESOURCES_URL}${type}/original/${name}` };
      } else {
        imageSrc = { src: `${RESOURCES_URL}${type}/original/${name}` };
      }
      return <img {...this.props} {...imageSrc} alt={alt} />;
    }
    return (
      <div>
        <Desktop type={type}>
          {lazy ? (
            <img
              width={this.props.width}
              height={this.props.height}
              data-lazy={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'desktop')}/${name}`}
              alt={alt}
              {...this.props}
            />
          ) : (
            <img
              width={this.props.width}
              height={this.props.height}
              src={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'desktop')}/${name}`}
              alt={alt}
              {...this.props}
            />
          )}
        </Desktop>
        <Tablet type={type}>
          {lazy ? (
            <img
              width={this.props.width}
              height={this.props.height}
              data-lazy={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'tablet')}/${name}`}
              alt={alt}
              {...this.props}
            />
          ) : (
            <img
              width={this.props.width}
              height={this.props.height}
              src={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'tablet')}/${name}`}
              alt={alt}
              {...this.props}
            />
          )}
        </Tablet>
        <Mobile type={type}>
          {lazy ? (
            <img
              width={this.props.width}
              height={this.props.height}
              data-lazy={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'mobile')}/${name}`}
              alt={alt}
              {...this.props}
            />
          ) : (
            <img
              width={this.props.width}
              height={this.props.height}
              src={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'mobile')}/${name}`}
              alt={alt}
              {...this.props}
            />
          )}
        </Mobile>
        <SmallMobile type={type}>
          {lazy ? (
            <img
              width={this.props.width}
              height={this.props.height}
              data-lazy={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'smallMobile')}/${name}`}
              alt={alt}
              {...this.props}
            />
          ) : (
            <img
              width={this.props.width}
              height={this.props.height}
              src={`${RESOURCES_URL}${type}/${size ||
                getSize(type, 'smallMobile')}/${name}`}
              alt={alt}
              {...this.props}
            />
          )}
        </SmallMobile>
      </div>
    );
  }
}

export default MediaQueryPic;
