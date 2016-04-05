'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Hamming = function Hamming() {};

Hamming.prototype.compute = function (a, b) {

  if (a.length !== b.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  return a.split('').reduce(function (sum, val, idx, arr) {
    return sum += a[idx] !== b[idx] ? 1 : 0;
  }, 0);
};

exports['default'] = Hamming;
module.exports = exports['default'];