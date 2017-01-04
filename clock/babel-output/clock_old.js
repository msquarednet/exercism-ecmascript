'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Clock = (function () {
  function Clock() {
    _classCallCheck(this, Clock);
  }

  _createClass(Clock, null, [{
    key: 'at',
    value: function at() {
      var hour = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var h = hour;
      var m = min;
      function pad2(num) {
        return num < 10 ? '0' + num : num.toString();
      }
      function formatTime(h, m) {
        if (m >= 60) {
          h += Math.floor(m / 60);
          m = m % 60;
        }
        if (m < 0) {
          h += Math.floor(m / 60);
          m = 60 + m % 60;
        }
        h = h % 24;
        h = h % 24 === 0 ? 0 : h;
        if (h < 0) {
          h = 24 + h;
        }
        return pad2(h) + ':' + pad2(m);
      }
      return {
        toString: function toString() {
          return formatTime(h, m);
        },
        plus: function plus() {
          var minutes = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

          return formatTime(h, m + minutes);
        },
        minus: function minus() {
          var minutes = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

          return formatTime(h, m - minutes);
        },
        equals: function equals(clock) {
          return formatTime(h, m) === clock.toString();
        }
      };
    }
  }]);

  return Clock;
})();

exports['default'] = Clock.at;
module.exports = exports['default'];