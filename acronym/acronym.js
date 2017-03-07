class Acronyms {
  constructor() {}
  static parse(str='') {
    const words = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace('-', ' ').split(' ')
    return words.reduce((sum, val) => sum + val.replace(/\W/, '').charAt(0).toUpperCase(), '')
  }
}


export default Acronyms