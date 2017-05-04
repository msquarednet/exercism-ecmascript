class PerfectNumbers {
  constructor() {}
  classify(num) {
    if (num<=0) {return 'Classification is only possible for natural numbers.'}
    const aliquot = PerfectNumbers.getFactors(num).reduce((acc, x) => acc + x , 0) - num
    return (aliquot>num) ? 'abundant' : (aliquot<num) ? 'deficient' : 'perfect';
  }
  static getFactors(num) {
    let factors = [];
    for (let i=1; i<=Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        factors.push(i);
        if (num / i !== i) {factors.push(num / i)} 
      }
    }
    return factors.sort((a, b) => a - b)  // numeric sort
  }

}


export default PerfectNumbers