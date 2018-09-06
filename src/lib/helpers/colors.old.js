// @flow
export const primary = '#125566';
export const primaryAlt = '#1B6672';
export const primaryColor15 = '#cfeff7';
export const gray = '#5A6771';
export const gray80 = '#7f8d99';
export const grayAlt = '#65727A';
export const graySoft = '#F5F5F5';
export const lightGray = '#d5d5d5';
export const blueLight = '#00B5E2';
export const blueLightAlt = '#34c3ea';
export const blueLight15 = '#cef5ff';
export const blueLight80 = '#30d6ff';
export const grayLight = '#E4E4E4';
export const grayLightAlt = '#BFBFBF';
export const grayPlaceholder = '#F0F0F0';
export const orange = '#CE6A24';
export const orangeAlt = '#D07437';
export const orange15 = '#f7e2d3';
export const green = '#80AD38';
export const greenAlt = '#8EB43C';
export const whatsappGreen = '#25D366';
export const green15 = '#ebf4dd';
export const red = '#B53C2E';
export const redAlt = '#C75043';
export const red15 = '#f5dcd9';
export const redError = '#B53C2E';
export const greenGray = '#CADFE0';
export const white = '#FFFFFF';
export const lightYellow = '#FCF0E5';
export const blueFb = '#3b5998';
export const blueFbAlt = '#8b9dc3';
export const blueLightRGB = '0, 181, 226';
export const transparentRGBA = 'rgba(0, 0, 0, 0)';
export const grayLightHover = '#E5F7FC';
export const grayDarkHover = '#E7EEEF';
export const grayChip = '#EEEEEE';

const relColors = {
    primary: blueLight,
    danger: red,
    success: green,
    alt: orange,
    gray: grayLight,
    default: primary,
};

export function getByClass(value = 'default') {
    return relColors[value];
}
