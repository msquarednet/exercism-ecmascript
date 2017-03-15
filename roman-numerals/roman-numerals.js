function toRoman(num) {
  const numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                        ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                        ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],         // Hundreds
                        ["","M","MM","MMM"]];                                        // Thousands
  const  numarr = num.toString().split('').reverse()
  return numarr.reduce((sum, x, i, a) => numeralCodes[i][x] + sum, '')
}


export default toRoman;