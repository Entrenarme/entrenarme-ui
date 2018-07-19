// @flow
declare type Device =
  | 'mobile'
  | 'iphone'
  | 'ipad'
  | 'desktop'
  | 'large_desktop'
  | 'retina_desktop';

declare type CustomImage = {
  id: number,
  keyId?: string,
  order: number,
  sport_id: number,
  sport_name: string,
  type: 'video' | 'image',
  value: string,
};
