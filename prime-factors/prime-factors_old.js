class PrimeFactors {
  constructor() {}
  for (num) {

    const getFactors = (num) => {
      let factors = [];
      for (let i=1; i<=Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
          factors.push(i);
          if (num / i !== i) {factors.push(num / i);}
        }
      }
      return factors.sort((a, b) => a - b);  // numeric sort
    }

    const isPrime = (num) => (getFactors(num).length===2 && num>1) ? true : false;

    const getPrimeFactors = (f) => {                          //console.log('factors of '+f[f.length-1]+' is ' + f);
      let primefactors = [];
      let remaining = f[f.length-1];    //remaining starts at num, and gets whittled down to 1.
      let i=1;
      do {
        let factor = f[i];
        if (isPrime(factor)) {                                //console.log( isPrime(factor), factor, i );
          while (remaining % factor === 0) {
            remaining/=factor; primefactors.push(factor);     //console.log(remaining, primefactors);
          }
        }
        i++;
      } while (remaining>1);                                     
      return primefactors;
    }

    return getPrimeFactors(getFactors(num))
  }
}


export default PrimeFactors;