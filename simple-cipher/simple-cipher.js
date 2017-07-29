class Cipher {
  constructor(keystr) {
    const letters = [...'abcdefghijklmnopqrstuvwxyz']    
    this.key = letters.map(() => letters[Math.floor(Math.random()*26)]).join('')
    if (keystr || keystr==='') {
      if (!/^[a-z]+$/.test(keystr)) {throw new Error('Bad key')} 
      this.key = keystr
    }
    this.aarr = [...letters, ...letters]                        //alpha array (2x)
    this.karr = [...this.key].map(x => this.aarr.indexOf(x))    //key(shift) array
  }
  encode (str) {  
    return [...str].map((x,i) => this.aarr[ this.aarr.indexOf(x)    + this.karr[i] ]).join('')
  }
  decode (str) { 
    return [...str].map((x,i) => this.aarr[ this.aarr.indexOf(x)+26 - this.karr[i] ]).join('')
  }
}



export default Cipher