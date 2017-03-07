'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Acronyms = (function () {
  function Acronyms() {
    _classCallCheck(this, Acronyms);
  }

  _createClass(Acronyms, null, [{
    key: 'parse',
    value: function parse() {
      var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      var words = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace('-', ' ').split(' ');
      return words.reduce(function (sum, val) {
        return sum + val.replace(/\W/, '').charAt(0).toUpperCase();
      }, '');
    }
  }]);

  return Acronyms;
})();

exports['default'] = Acronyms;
module.exports = exports['default'];