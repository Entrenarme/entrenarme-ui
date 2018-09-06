// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RESOURCES_URL } from '../../helpers/config';

import MediaGallery from './index';
import annotations from './annotations';

const actions = {
  onMediaClick: action('onMediaClick'),
};

export const images = [
  {
    value: '1522740049132_sebas-b.jpg',
    id: '1',
  },
  {
    value: 'cnNUv6b2R4iY3S6vkACW_sebas-b.jpg',
    id: '2',
  },
  {
    value: 'L1YNFpESn6YOuhbDrLPJ_sebas-b.jpg',
    id: '3',
  },
  {
    value: 'ie8yTDmcQVGEDS8PLHln_sebas-b.jpg',
    id: '4',
  },
  {
    value: 'GvsbXoVTHafoFh1Ex8DL_sebas-b.jpg',
    id: '5',
  },
  {
    value: 'QSghTdccTIGeFGw7x9Ti_sebas-b.jpg',
    id: '6',
  },
  {
    value: 'http://www.youtube.com/watch?v=9cJf1FKNTMI',
    id: '-1',
    type: 'video',
  },
  {
    value: '1529575827496_sebas-b.png',
    id: '0',
  },
  {
    value: '2qetQIR5SvaIVdtnJGGI_sebas-b.jpg',
    id: '7',
  },
  {
    value: 'KDLiVrbQTEWZ6DPBlcE1_sebas-b.jpg',
    id: '8',
  },
];

storiesOf('MediaGallery', module)
  .add(
    'Infinite',
    () => (
      <MediaGallery lazyload infinite offsetVisibleImages={1} images={images}>
        <MediaGallery.LeftArrow rounded />
        <MediaGallery.RightArrow component="Arrow" />
        <MediaGallery.Gallery
          trainerName="sebas-b"
          placeholderWidth="300px"
          imageHeight="260px"
          placeholderBackground={`${RESOURCES_URL}static/images/profile/image_placeholder_b.svg`}
        />
      </MediaGallery>
    ),
    { info: annotations },
  )
  .add(
    'Infinite 2',
    () => (
      <MediaGallery
        lazyload
        infinite
        offsetVisibleImages={1}
        images={images.slice(0, 2)}
      >
        <MediaGallery.LeftArrow rounded />
        <MediaGallery.RightArrow component="Arrow" />
        <MediaGallery.Gallery
          trainerName="sebas-b"
          placeholderWidth="300px"
          imageHeight="260px"
          placeholderBackground={`${RESOURCES_URL}static/images/profile/image_placeholder_b.svg`}
        />
      </MediaGallery>
    ),
    { info: annotations },
  )
  .add(
    'Not infinite',
    () => (
      <MediaGallery lazyload offsetVisibleImages={0} images={images}>
        <MediaGallery.LeftArrow />
        <MediaGallery.RightArrow />
        <MediaGallery.Gallery
          trainerName="sebas-b"
          placeholderWidth="300px"
          imageHeight="260px"
        />
      </MediaGallery>
    ),
    { info: annotations },
  )
  .add(
    'Default with few images',
    () => (
      <MediaGallery
        lazyload
        infinite
        offsetVisibleImages={1}
        images={images.slice(0, 4)}
      >
        <MediaGallery.LeftArrow />
        <MediaGallery.RightArrow />
        <MediaGallery.Gallery
          trainerName="sebas-b"
          placeholderWidth="300px"
          imageHeight="260px"
        />
      </MediaGallery>
    ),
    { info: annotations },
  )
  .add(
    'One image',
    () => (
      <div style={{ width: '300px' }}>
        <MediaGallery
          lazyload
          infinite
          reverseDirection
          offsetVisibleImages={1}
          images={images}
        >
          <MediaGallery.Gallery
            trainerName="sebas-b"
            placeholderWidth="300px"
            imageWidth="300px"
            imageHeight="260px"
            onMediaClick={actions.onMediaClick}
            imageClassName="list__list-item--photo"
          />
          <MediaGallery.RightArrow />
          <MediaGallery.LeftArrow />
        </MediaGallery>
      </div>
    ),
    { info: annotations },
  );
