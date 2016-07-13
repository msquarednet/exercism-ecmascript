'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
  function PhoneNumber(str) {
    _classCallCheck(this, PhoneNumber);

    this.phone = str;
  }

  _createClass(PhoneNumber, [{
    key: 'number',
    value: function number() {
      var cleaned = this.phone.replace(/[^\d]/g, '').trim();
      if (cleaned.length === 10 || cleaned.length === 11 && cleaned.charAt(0) === '1') {
        if (cleaned.length === 11 && cleaned.charAt(0) === '1') {
          cleaned = cleaned.slice(1);
        }
      } else {
        cleaned = '0000000000';
      }
      return cleaned;
    }
  }, {
    key: 'areaCode',
    value: function areaCode() {
      var cleaned = this.number(this.phone);
      return cleaned.slice(0, 3);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var cleaned = this.number(this.phone);
      return '(' + this.areaCode(cleaned) + ') ' + cleaned.slice(3, 6) + '-' + cleaned.slice(6);
    }
  }]);

  return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];