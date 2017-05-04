'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PerfectNumbers = (function () {
  function PerfectNumbers() {
    _classCallCheck(this, PerfectNumbers);
  }

  _createClass(PerfectNumbers, [{
    key: 'classify',
    value: function classify(num) {
      if (num <= 0) {
        return 'Classification is only possible for natural numbers.';
      }
      // const factors = PerfectNumbers.getFactors(num)
      var aliquot = PerfectNumbers.getFactors(num).reduce(function (acc, x) {
        return acc + x;
      }, 0) - num;
      return aliquot > num ? 'abundant' : aliquot < num ? 'deficient' : 'perfect';
    }
  }], [{
    key: 'getFactors',
    value: function getFactors(num) {
      var factors = [];
      for (var i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
          factors.push(i);
          if (num / i !== i) {
            factors.push(num / i);
          }
        }
      }
      return factors.sort(function (a, b) {
        return a - b;
      }); // numeric sort
    }
  }]);

  return PerfectNumbers;
})();

exports['default'] = PerfectNumbers;
module.exports = exports['default'];