// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import MediaGallery from './index';

const images = [
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
    alt: 'image6',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample8',
    key: '8',
    alt: 'image6',
  },
  {
    src: 'https://dummyimage.com/250x320/ff7f1f/333333.png&text=Sample9',
    key: '9',
    alt: 'image6',
  },
];

storiesOf('MediaGallery', module)
  .add('Default', () => (
    <MediaGallery lazyload infinite visibleImages={10} images={images}>
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
        visibleImages={2}
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
