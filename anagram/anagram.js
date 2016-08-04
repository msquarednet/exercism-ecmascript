export default class Anagram {
  constructor(ana='') {
    this.ana = ana;
  }
  matches(...arr) {
    let marr = (Array.isArray(arr[0])) ? arr[0] : arr
    return marr.filter( x => Anagram.isAnagram(x, this.ana) );
  }
  static isAnagram(a, b) {
    let asort, bsort = "";
    a = a.toLowerCase().trim();
    b = b.toLowerCase().trim();
    asort = a.split('').sort().join('');
    bsort = b.split('').sort().join('');		
    return asort===bsort && a!==b;
  }

}