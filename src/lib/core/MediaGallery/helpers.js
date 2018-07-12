// @flow
import invariant from 'invariant';

const getAllChildMedia = (
  containerRef: ?HTMLElement,
): ?NodeList<HTMLElement> => {
  const allImages =
    (containerRef && containerRef.querySelectorAll('img')) || null;
  return allImages;
};

const getAllChild = (containerRef: ?HTMLElement): ?NodeList<HTMLElement> => {
  const allImages =
    (containerRef && containerRef.querySelectorAll('img, div')) || null;
  return allImages;
};

const checkPropErrors = ({ lazyload, visibleImages }) => {
  const isError = lazyload && visibleImages === null;
  invariant(
    !isError,
    'If you pass a lazyload prop, you should pass a visibleImages number too',
  );
};

export { getAllChildMedia, checkPropErrors, getAllChild };
