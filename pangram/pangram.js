class Pangram {
  constructor(str) {
	  this.str = str.toLowerCase() || '';
  }
  isPangram() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let cntr = letters.reduce((sum, x) => {
      if (this.str.indexOf(x)!==-1) {return sum + 1};
    },0);
    return (cntr >= 26);
  }
}

export default Pangram;