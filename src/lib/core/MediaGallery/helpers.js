// @flow
import invariant from 'invariant';

const getAllChildMedia = (
  containerRef: ?HTMLElement,
): ?NodeList<HTMLElement> => {
  const allImages =
    (containerRef && containerRef.querySelectorAll('.media')) || null;
  return allImages;
};

const getLastChildMedia = containerRef => {
  const allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    return allChildMedia[allChildMedia.length - 1];
  }
  return null;
};

const getFirstChildMedia = containerRef => {
  const allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    return allChildMedia[0];
  }
  return null;
};

const getNChildMedia = (containerRef, n) => {
  const allChildMedia = getAllChildMedia(containerRef);
  if (allChildMedia && allChildMedia.length > 0) {
    const nChild = allChildMedia[n];
    if (nChild) return nChild;
  }
  return null;
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

export {
  getAllChildMedia,
  checkPropErrors,
  getAllChild,
  getLastChildMedia,
  getFirstChildMedia,
  getNChildMedia,
};
