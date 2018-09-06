// @flow
const getFontWeight = elemProps => {
  if (elemProps.options) {
    const weight = elemProps.options.fontWeight;
    switch (weight) {
      case 'bold':
        return 500;
      case 'bolder':
        return 600;
      case 'boldest':
        return 700;
      default:
        return 400;
    }
  }
};

export { getFontWeight };
