"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = (function () {
  function School() {
    _classCallCheck(this, School);

    this.db = {};
  }

  _createClass(School, [{
    key: "roster",
    value: function roster() {
      return JSON.parse(JSON.stringify(this.db));
    }
  }, {
    key: "add",
    value: function add(name, grade) {
      if (!this.db[grade]) {
        this.db[grade] = [name];
      } //insert
      else {
          //update
          this.db[grade].push(name);
          this.db[grade] = this.db[grade].sort();
        }
    }
  }, {
    key: "grade",
    value: function grade(num) {
      return this.db[num] || [];
    }
  }]);

  return School;
})();

exports["default"] = School;
module.exports = exports["default"];