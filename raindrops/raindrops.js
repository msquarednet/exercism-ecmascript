class Raindrops{
  constructor(){}
  convert(num) {
    let val = ''
    if (num%3===0) {val += 'Pling'}
    if (num%5===0) {val += 'Plang'}
    if (num%7===0) {val += 'Plong'} 
    return (val==='') ? val += num : val;
  }
}

export default Raindrops


