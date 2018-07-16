// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import MediaGallery from './index';

const images = [
  {
    value: 'http://www.youtube.com/watch?v=9cJf1FKNTMI',
    key: '-1',
    alt: 'image0',
  },
  {
    src: 'https://dummyimage.com/110x320/ff7f7f/333333.png&text=Sample0',
    key: '0',
    alt: 'image0',
  },
  {
    src: 'https://dummyimage.com/220x320/ff7f6f/333333.png&text=Sample1',
    key: '1',
    alt: 'image1',
  },
  {
    src: 'https://dummyimage.com/60x320/ff7f5f/333333.png&text=Sample2',
    key: '2',
    alt: 'image2',
  },
  {
    src: 'https://dummyimage.com/320x320/ff7f4f/333333.png&text=Sample3',
    key: '3',
    alt: 'image3',
  },
  {
    src: 'https://dummyimage.com/420x320/ff7f3f/333333.png&text=Sample4',
    key: '4',
    alt: 'image4',
  },
  {
    src: 'https://dummyimage.com/500x320/ff7f2f/333333.png&text=Sample5',
    key: '5',
    alt: 'image5',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample6',
    key: '6',
    alt: 'image6',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample7',
    key: '7',
    alt: 'image7',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample8',
    key: '8',
    alt: 'image8',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample9',
    key: '9',
    alt: 'image9',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample10',
    key: '10',
    alt: 'image10',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample11',
    key: '11',
    alt: 'image10',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample12',
    key: '12',
    alt: 'image10',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample13',
    key: '13',
    alt: 'image10',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample14',
    key: '14',
    alt: 'image10',
  },
];

storiesOf('MediaGallery', module)
  .add('Infinite', () => (
    <MediaGallery lazyload infinite offsetVisibleImages={1} images={images}>
      <MediaGallery.LeftArrow rounded />
      <MediaGallery.RightArrow component="Arrow" />
      <MediaGallery.Gallery placeholderWidth="300px" imageHeight="200px" />
    </MediaGallery>
  ))
  .add('Not infinite', () => (
    <MediaGallery lazyload offsetVisibleImages={1} images={images}>
      <MediaGallery.LeftArrow />
      <MediaGallery.RightArrow />
      <MediaGallery.Gallery placeholderWidth="300px" imageHeight="200px" />
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
      <MediaGallery.Gallery placeholderWidth="300px" imageHeight="200px" />
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
          placeholderWidth="300px"
          imageWidth="300px"
          imageHeight="200px"
        />
        <MediaGallery.RightArrow />
      </MediaGallery>
    </div>
  ));
