class Transcriptor {
  toRna(a) {
    const obj = {'G':'C', 'C':'G', 'T':'A', 'A':'U'};
    let arr = a.split('').map((val)=>{
      return obj[val];   
    });
    return arr.join('');
  }  
}


export default Transcriptor;