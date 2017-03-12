function score (str){
  const word = (str) ? str.toLowerCase() : ''
  const aa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const a1 = [ 1,  3,  3,  2,  1,  4,  2,  4,  1,  8,  5,  1,  3,  1,  1,  3,  10, 1,  1,  1,  1,  4,  4,  8,  4,  10 ];
  const obj= {};  
  aa.forEach((x,i) => obj[x]=a1[i])  //populate obj
  return word.split('').reduce((sum, val) => sum + obj[val], 0)
}


export default score;