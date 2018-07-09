// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import MediaGallery from './index';

storiesOf('MediaGallery', module).add('Default', () => (
  <MediaGallery
    lazyload
    defaultArrows
    visibleImages={1}
    placeholderWidth="300px"
    imageWidth="300px"
    imageHeight="200px"
    images={[
      {
        src: 'http://via.placeholder.com/350x150',
        key: '0',
        alt: 'image0',
      },
      { src: 'http://via.placeholder.com/350x200', key: '1', alt: 'image1' },
      { src: 'http://via.placeholder.com/350x200', key: '2', alt: 'image1' },
      { src: 'http://via.placeholder.com/350x200', key: '3', alt: 'image1' },
      { src: 'http://via.placeholder.com/350x200', key: '4', alt: 'image1' },
    ]}
  />
));
