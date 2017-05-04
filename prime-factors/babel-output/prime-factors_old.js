"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrimeFactors = function () {
  function PrimeFactors() {
    _classCallCheck(this, PrimeFactors);
  }

  _createClass(PrimeFactors, [{
    key: "for",
    value: function _for(num) {

      var getFactors = function getFactors(num) {
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
      };

      var isPrime = function isPrime(num) {
        return getFactors(num).length === 2 && num > 1 ? true : false;
      };

      var getPrimeFactors = function getPrimeFactors(f) {
        //console.log('factors of '+f[f.length-1]+' is ' + f);
        var primefactors = [];
        var remaining = f[f.length - 1]; //remaining starts at num, and gets whittled down to 1.
        var i = 1;
        do {
          var factor = f[i];
          if (isPrime(factor)) {
            //console.log( isPrime(factor), factor, i );
            while (remaining % factor === 0) {
              remaining /= factor;primefactors.push(factor); //console.log(remaining, primefactors);
            }
          }
          i++;
        } while (remaining > 1);
        return primefactors;
      };

      return getPrimeFactors(getFactors(num));
    }
  }]);

  return PrimeFactors;
}();

exports.default = PrimeFactors;