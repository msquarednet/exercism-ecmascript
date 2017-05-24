class atbash {
  static encode(str) {
    const alpha  = [...'abcdefghijklmnopqrstuvwxyz']
    const cipher = [...alpha].reverse()
    const input  = [...str.toLowerCase().replace(/[\s,.]/g, '')]
    return input.map(x => (Number(x)) ? x : cipher[alpha.indexOf(x)])
                .map((x,i) => (i%5===0 && i>0) ? ' '+x : x )
                .join('')
  }
}


export default atbash;