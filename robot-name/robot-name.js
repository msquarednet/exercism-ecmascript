class Robot {
  constructor() {
    this._name;
    this.reset();
  }
  get name() {return this._name};  //set name(str) {throw new Error('nope')}
  reset() {
    this._name = Robot.generateUniqueName();
  }
  static generateName () {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let str = '';
    for (var i=0; i<2; i++) {str += letters[Math.floor(Math.random()*letters.length)];}
    for (var i=0; i<3; i++) {str += numbers[Math.floor(Math.random()*numbers.length)];}
    return str;
  }
  static generateUniqueName() {
    let str; 
    do {str = Robot.generateName()} while (!Robot.isUniqueName(str)); 
    return str;
  }
  static isUniqueName(str) {
    let valid = (Robot.nameSet.has(str)) ? false : true;
    if (valid) {Robot.nameSet.add(str);}
    return valid;
  }
}

Robot.nameSet = new Set();



export default Robot;