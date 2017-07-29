class Sieve {
  constructor(lim){
    this.lim = lim
  }
  get primes() {
    const lim = this.lim+1
    const arr = new Array(lim).fill(1)  //true
    for (let i=2; i<=lim; i++) {
      if (arr[i]) {
        arr[i]=i
        for (var j=i*i; j<=lim; j+=i) { arr[j]=0 } //falsify (and increment by) multiples
      }
    }
    return arr.filter(x => x!==0).splice(2)
  }
}


export default Sieve








// console.time('TEST')
// new Sieve(100000).primes
// console.timeEnd('TEST')