# Update Flow

- lazyload

  - Will autoload the images that fit on the container that contains the <MediaGallery /> component and the last one of the images provided to be able to render it when going backwards.
  - Ex: images={['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8']}
    It will load image1 and check the width of the container and the sum of the loaded images, if it can load more, then it will load the next one, and so on. Suppose that we can fit 3 of these images, so the HTML will look like this ['image1', 'image2', 'image3', 'placeholder', 'placeholder', 'placeholder', 'placeholder', 'image8']
  - Each time we click on any arrow to move the gallery, it will load the next image.

- offsetVisibleImages

  - Will load the number of the images that will fit on the container + the number of the offsetVisibleImages

- infinite
  - Will be able to swipe non-stop. The first image will be moved to be the last item when moving to the right and the last image will be moved to the first item when moving to the left.
