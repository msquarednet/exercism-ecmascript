class Crypto {
  constructor(str='') {
    this.input = str
  }
  normalizePlaintext() {
    return this.input.replace(/\W/gi,'').toLowerCase()
  }
  size() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length))
  }
  plaintextSegments() {
    const size = this.size()
    return [...this.normalizePlaintext()].map((x,i,a) => (i%size===0 && i>0) ? ' '+x : x).join('').split(' ')
  }
  ciphertext () {
    const size = this.size()
    const segs = this.plaintextSegments() 
    return [...segs[0]].reduce((acc,x,i,a) => {   
      let substr = ''
      for (let j=0; j<=size; j++) {
        if (segs[j]) {
          const val = segs[j][i];        
          if (val) {substr += val }
        }
      }
      return acc + substr
    }, '')
  }
}


export default Crypto