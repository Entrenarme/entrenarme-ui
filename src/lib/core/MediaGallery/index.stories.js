// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MediaGallery from './index';

const actions = {
  onMediaClick: action('onMediaClick'),
};

const images = [
  {
    value: 'http://www.youtube.com/watch?v=9cJf1FKNTMI',
    id: '-1',
    type: 'video',
  },
  {
    value: '1521709719161_sebas-b.jpg',
    id: '0',
  },
  {
    value: '1521709730310_sebas-b.jpg',
    id: '1',
  },
  {
    value: '1521709741271_sebas-b.jpg',
    id: '2',
  },
  {
    value: '1521709763485_sebas-b.jpg',
    id: '3',
  },
  {
    value: '1521709784423_sebas-b.jpg',
    id: '4',
  },
  {
    value: '1521709793823_sebas-b.jpg',
    id: '5',
  },
  {
    value: '1524586482209_sebas-b.jpg',
    id: '6',
  },
];

storiesOf('MediaGallery', module)
  .add('Infinite', () => (
    <MediaGallery lazyload infinite offsetVisibleImages={3} images={images}>
      <MediaGallery.LeftArrow rounded />
      <MediaGallery.RightArrow component="Arrow" />
      <MediaGallery.Gallery
        trainerName="sebas-b"
        placeholderWidth="300px"
        imageHeight="260px"
      />
    </MediaGallery>
  ))
  .add('Not infinite', () => (
    <MediaGallery lazyload offsetVisibleImages={3} images={images}>
      <MediaGallery.LeftArrow />
      <MediaGallery.RightArrow />
      <MediaGallery.Gallery
        trainerName="sebas-b"
        placeholderWidth="300px"
        imageHeight="260px"
      />
    </MediaGallery>
  ))
  .add('Default with few images', () => (
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
  ))
  .add('One image', () => (
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
        />
        <MediaGallery.RightArrow />
        <MediaGallery.LeftArrow />
      </MediaGallery>
    </div>
  ));
