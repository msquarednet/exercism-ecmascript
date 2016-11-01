import BigInt from './big-integer';


class Grains{
  square(num) {
    return BigInt(2).pow(num-1).toString();
  }
  total() {
    return BigInt(2).pow(64).add(-1).toString();
  }
}


export default Grains;
