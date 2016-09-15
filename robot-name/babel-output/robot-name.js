'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Robot = (function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this._name;
    this.reset();
  }

  _createClass(Robot, [{
    key: 'reset',
    //set name(str) {throw new Error('nope')}
    value: function reset() {
      this._name = Robot.generateUniqueName();
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }], [{
    key: 'generateName',
    value: function generateName() {
      var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      var str = '';
      for (var i = 0; i < 2; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];
      }
      for (var i = 0; i < 3; i++) {
        str += numbers[Math.floor(Math.random() * numbers.length)];
      }
      return str;
    }
  }, {
    key: 'generateUniqueName',
    value: function generateUniqueName() {
      var str = undefined;
      do {
        str = Robot.generateName();
      } while (!Robot.isUniqueName(str));
      return str;
    }
  }, {
    key: 'isUniqueName',
    value: function isUniqueName(str) {
      var valid = Robot.nameSet.has(str) ? false : true;
      if (valid) {
        Robot.nameSet.add(str);
      }
      return valid;
    }
  }]);

  return Robot;
})();

Robot.nameSet = new Set();

exports['default'] = Robot;
module.exports = exports['default'];