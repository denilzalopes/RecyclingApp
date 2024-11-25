// metro.config.js
const nodeLibs = require('node-libs-react-native');
const { getDefaultConfig } = require('metro-config');

module.exports = {
  ...getDefaultConfig(),
  resolver: {
    extraNodeModules: nodeLibs,
  },
};
