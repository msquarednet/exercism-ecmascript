const validate = (str) => (/^[01]+$/.test(str)) ? str : '0'

class Binary {
  constructor(str) {
    this.bstr = validate(str)
  }
  toDecimal() {
    return [...this.bstr].reverse().reduce((agg,x,i) => {
      return agg += x*Math.pow(2,i)
    }, 0)
  }
}


export default Binary
