export default `# Update Flow

- lazyload

  - Will autoload the images that fit on the container that contains the <MediaGallery /> component.
    If 'infinite', will load too the last two of the images provided to be able to render it when going backwards.
  - Ex: images={['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8']}
    It will load image1 and check the width of the container and the sum of the loaded images, if it can load more, then it will load the next one, and so on. Suppose that we can fit 3 of these images, so the HTML will look like this ['image1', 'image2', 'image3', 'placeholder', 'placeholder', 'placeholder', 'image7', 'image8']
  - Each time we click on any arrow to move the gallery, it will reestructure the images internal array.

- offsetVisibleImages

  - Will load the number of the images that will fit on the container + the number of the offsetVisibleImages

- infinite
  - Will be able to swipe non-stop. The first image will be moved to be the last item when moving to the right and the last image will be moved to the first item when moving to the left.

- children
  - <MediaGallery.LeftArrow /> & <MediaGallery.RightArrow /> (optional)
   - props:
      - component: React.Node -> If provided, will be what is rendered by the arrow component.
      - rounded: boolean -> If true, will render a rounded div outside the component.
  - <MediaGallery.Gallery />
    - props:
      - placeholderWidth: string -> The width of the placeholder div when no image loaded
      - imageWidth: string -> The width of the image when (optional)
      - imageHeight: string -> The height of the loaded image (optional)

  `;
