// @flow
declare type Device =
  | 'mobile'
  | 'iphone'
  | 'ipad'
  | 'desktop'
  | 'large_desktop'
  | 'retina_desktop';

declare type CustomImage = {
  src: string,
  alt: string,
  key?: string | number,
  lazyload?: boolean,
  lazySrc?: string,
};
