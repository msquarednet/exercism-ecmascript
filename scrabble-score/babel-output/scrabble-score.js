'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function score(str) {
  var word = str ? str.toLowerCase() : '';
  var aa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var a1 = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
  var obj = {};
  aa.forEach(function (x, i) {
    return obj[x] = a1[i];
  }); //populat obj
  return word.split('').reduce(function (sum, val) {
    return sum + obj[val];
  }, 0);
}

exports['default'] = score;
module.exports = exports['default'];