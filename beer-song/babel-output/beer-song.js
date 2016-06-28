'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Beer = (function () {
  function Beer() {
    _classCallCheck(this, Beer);
  }

  _createClass(Beer, null, [{
    key: 'verse',
    value: function verse(num) {
      var curr = num - 1;
      var str = '';
      switch (num) {
        case 2:
          str = num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\nTake one down and pass it around, ' + curr + ' bottle of beer on the wall.\n';
          break;
        case 1:
          str = num + ' bottle of beer on the wall, ' + num + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
          break;
        case 0:
          str = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
          break;
        default:
          str = num + ' bottles of beer on the wall, ' + num + ' bottles of beer.\nTake one down and pass it around, ' + curr + ' bottles of beer on the wall.\n';
      }
      return str;
    }
  }, {
    key: 'sing',
    value: function sing() {
      var from = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
      var to = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      var song = '';
      for (var i = from; i >= to; i--) {
        song += Beer.verse(i);
        if (i > to) {
          song += '\n';
        }
      }
      return song;
    }
  }]);

  return Beer;
})();

exports['default'] = Beer;
module.exports = exports['default'];