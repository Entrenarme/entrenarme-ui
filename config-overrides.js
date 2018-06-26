const rewireStyledComponents = require('react-app-rewire-styled-components');
const { injectBabelPlugin } = require('react-app-rewired');

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireStyledComponents(config, env);
  config = injectBabelPlugin('flow-react-proptypes', config);
  return config;
};
