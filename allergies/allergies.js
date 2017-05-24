class Allergies {
  constructor(num) {
    this.num = num
    this.allergies = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats']
  }
  list () {
    let num = this.num%256
    return this.allergies.reverse().filter((x,i,a) => {
      let j = a.length-1-i
      if (num >= 2**j) {
        num = num%2**j;  return x;
      }
    }).reverse()
  }
  allergicTo(str) {return this.list().includes(str)}
}


export default Allergies

