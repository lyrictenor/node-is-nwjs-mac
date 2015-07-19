'use strict';
var assert = require('power-assert');
var isNwjsMac = require('./');

it('should ', function () {
  assert.strictEqual(isNwjsMac('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(isNwjsMac('unicorns'), 'unicorns & wrong');
});
