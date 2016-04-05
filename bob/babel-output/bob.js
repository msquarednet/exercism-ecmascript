'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Bob = (function () {
  function Bob() {
    _classCallCheck(this, Bob);
  }

  _createClass(Bob, [{
    key: 'hey',
    value: function hey(input) {

      var qstr = 'Sure.';
      var yellstr = 'Whoa, chill out!';
      var nostr = 'Fine. Be that way!';
      var whatstr = 'Whatever.';

      var isYelling = function isYelling(input) {
        return input.toUpperCase() === input && input.toLowerCase() !== input;
      };
      var isQuestioning = function isQuestioning(input) {
        return input.charAt(input.length - 1) === '?';
      };
      var isNothing = function isNothing(input) {
        return input.trim() === '';
      };

      //order matters...
      if (isYelling(input)) {
        return yellstr;
      }
      if (isQuestioning(input)) {
        return qstr;
      }
      if (isNothing(input)) {
        return nostr;
      }
      return whatstr;
    }
  }]);

  return Bob;
})();

exports['default'] = Bob;
module.exports = exports['default'];