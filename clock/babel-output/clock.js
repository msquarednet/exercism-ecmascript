'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var pad2 = function pad2(num) {
  return num < 10 ? '0' + num : num.toString();
};

var Clock = (function () {
  function Clock() {
    var h = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var m = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    _classCallCheck(this, Clock);

    h += Math.floor(m / 60);
    h = h % 24;
    m = m % 60;
    this.h = h < 0 ? 24 + h : h;
    this.m = m < 0 ? 60 + m : m;
  }

  _createClass(Clock, [{
    key: 'formatTime',
    value: function formatTime() {
      return pad2(this.h) + ':' + pad2(this.m);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.formatTime();
    }
  }, {
    key: 'plus',
    value: function plus() {
      var mins = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      return at(this.h, this.m + mins);
    }
  }, {
    key: 'minus',
    value: function minus() {
      var mins = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
      return at(this.h, this.m - mins);
    }
  }, {
    key: 'equals',
    value: function equals(clock) {
      return this.formatTime() === clock.toString();
    }
  }]);

  return Clock;
})();

var at = function at(h, m) {
  return new Clock(h, m);
};

exports['default'] = at;
module.exports = exports['default'];