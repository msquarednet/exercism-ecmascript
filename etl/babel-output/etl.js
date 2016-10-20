"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var transform = function transform(obj) {
	var newObj = {};

	var _loop = function (i) {
		//console.log(i, obj[i]);
		obj[i].forEach(function (letter) {
			return newObj[letter.toLowerCase()] = Number(i);
		});
	};

	for (var i in obj) {
		_loop(i);
	}
	return newObj;
};

exports["default"] = transform;
module.exports = exports["default"];