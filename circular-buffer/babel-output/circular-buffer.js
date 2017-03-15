'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var circularBuffer = function circularBuffer(len) {
  var arr = [];
  return {
    read: function read() {
      if (arr.length) {
        return arr.shift();
      } else {
        throw bufferEmptyException();
      }
    },
    write: function write(val) {
      if (val) {
        if (arr.length < len) {
          arr.push(val);
        } else {
          throw bufferFullException();
        }
      }
    },
    forceWrite: function forceWrite(val) {
      if (val) {
        if (arr.length === len) {
          this.read();
        }
        this.write(val);
      }
    },
    clear: function clear() {
      arr.length = 0;
    }
  };
};

var bufferEmptyException = function bufferEmptyException() {
  return new Error('empty');
};
var bufferFullException = function bufferFullException() {
  return new Error('full');
};

exports['default'] = circularBuffer;
exports.bufferEmptyException = bufferEmptyException;
exports.bufferFullException = bufferFullException;