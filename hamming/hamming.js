const Hamming = () => {}

Hamming.prototype.compute = function(a,b) {

  if (a.length !== b.length) {throw new Error('DNA strands must be of equal length.');}	
  
  let mutations = a.split('').reduce( (sum,val,idx,arr)=>{
    return sum += (a[idx] !== b[idx]) ? 1 : 0;
  }, 0);
  return mutations;
  
};



export default Hamming;