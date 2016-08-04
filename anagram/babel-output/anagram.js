'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram() {
    var ana = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, Anagram);

    this.ana = ana;
  }

  _createClass(Anagram, [{
    key: 'matches',
    value: function matches() {
      var _this = this;

      for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
        arr[_key] = arguments[_key];
      }

      var marr = Array.isArray(arr[0]) ? arr[0] : arr;
      return marr.filter(function (x) {
        return Anagram.isAnagram(x, _this.ana);
      });
    }
  }], [{
    key: 'isAnagram',
    value: function isAnagram(a, b) {
      var asort = undefined,
          bsort = "";
      a = a.toLowerCase().trim();
      b = b.toLowerCase().trim();
      asort = a.split('').sort().join('');
      bsort = b.split('').sort().join('');
      return asort === bsort && a !== b;
    }
  }]);

  return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];