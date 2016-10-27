'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SpaceAge = (function () {
  function SpaceAge(secs) {
    var _this = this;

    _classCallCheck(this, SpaceAge);

    this.secs = secs;
    this.ratios = {
      Earth: 1,
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Mars: 1.8808158,
      Jupiter: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132
    };
    Object.keys(this.ratios).forEach(function (planet) {
      SpaceAge.prototype['on' + planet] = function () {
        return Math.round(_this.secs * 100 / 31557600 / _this.ratios[planet]) / 100;
      };
    });
  }

  _createClass(SpaceAge, [{
    key: 'seconds',
    get: function get() {
      return this.secs;
    }
  }]);

  return SpaceAge;
})();

exports['default'] = SpaceAge;
module.exports = exports['default'];