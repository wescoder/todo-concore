// This file is needed for environments where node doesn't support the '--experimental-modules' flag
require = require('esm')(module) //eslint-disable-line no-global-assign
module.exports = require('./index.mjs')
