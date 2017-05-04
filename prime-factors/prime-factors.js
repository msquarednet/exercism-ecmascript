class PrimeFactors {
  constructor() {}
  for (num) { 
    const result = [];
    let i=2  
    while(num>1) {
      if (num%i===0) {num/=i; result.push(i);} 
      else {i++; if (i%2===0) {i++}}  //odd only, after 2
    }
    return result
  }
}


export default PrimeFactors;