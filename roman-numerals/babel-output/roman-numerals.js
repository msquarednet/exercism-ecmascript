"use strict";

Object.defineProperty(exports, "__esModule", {
                      value: true
});
function toRoman(num) {
                      var numeralCodes = [["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Ones
                      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Tens
                      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Hundreds
                      ["", "M", "MM", "MMM"]]; // Thousands
                      var numarr = num.toString().split('').reverse();
                      return numarr.reduce(function (sum, x, i, a) {
                                            return numeralCodes[i][x] + sum;
                      }, '');
}

exports["default"] = toRoman;
module.exports = exports["default"];