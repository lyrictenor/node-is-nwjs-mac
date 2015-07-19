#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var isNwjsMac = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ is-nwjs-mac [input]',
    '',
    'Examples',
    '  $ is-nwjs-mac',
    '  unicorns & rainbows',
    '',
    '  $ is-nwjs-mac ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(isNwjsMac(cli.input[0] || 'unicorns'));
