'use strict';
var isNwjs = require('is-nwjs');
module.exports = (isNwjs && process.platform === 'darwin');
