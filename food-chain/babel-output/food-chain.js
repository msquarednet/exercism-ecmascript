'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Song = (function () {
	function Song() {
		_classCallCheck(this, Song);

		this.food = ['', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'], this.txt2 = ['', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n', 'It wriggled and jiggled and tickled inside her.\n', 'How absurd to swallow a bird!\n', 'Imagine that, to swallow a cat!\n', 'What a hog, to swallow a dog!\n', 'Just opened her throat and swallowed a goat!\n', 'I don\'t know how she swallowed a cow!\n', 'She\'s dead, of course!\n'];
	}

	_createClass(Song, [{
		key: 'verse',
		value: function verse(num) {
			var str = '';
			var j = num + 1;
			for (var i = 1; i <= num; i++) {
				// i = ascending txt2,  j = descending food
				--j;
				if (i === 1) {
					//first
					str += 'I know an old lady who swallowed a ' + this.food[j] + '.\n' + this.txt2[j];
					if (num === 8) {
						break;
					}
				} else {
					//normal
					str += 'She swallowed the ' + this.food[j + 1] + ' to catch the ' + this.food[j] + '.\n';
					if (i === num - 1) {
						//2nd to last (spider wriggled)		
						str = str.substring(0, str.length - 2); //remove '\n'
						str += this.txt2[j].replace('It ', ' that ');
					}
					if (j === 1) {
						str += this.txt2[1];
					} //last
				}
			} //console.log(str+'--------------');
			return str;
		}
	}, {
		key: 'verses',
		value: function verses(from, to) {
			var str = '';
			for (var i = from; i <= to; i++) {
				str += this.verse(i) + '\n';
			}
			return str;
		}
	}]);

	return Song;
})();

exports['default'] = Song;
module.exports = exports['default'];