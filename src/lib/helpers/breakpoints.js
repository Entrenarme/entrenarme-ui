const size = {
  iphone: '320px',
  ipad: '768px',
  desktop: '1224px',
  large_desktop: '1825px',
};

const devices = {
  iphone: `min-width: ${size.iphone}`,
  ipad: `min-width: ${size.ipad}`,
  desktop: `min-width: ${size.desktop}`,
  large_desktop: `min-width: ${size.large_desktop}`,
};

export default devices;

// import devices from './breakpoints'

// @media(${devices.iphone}) {
//    ......
// }
