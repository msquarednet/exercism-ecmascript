class Words{
  count(str){
    str = str.replace(/\t\t+/g, '').replace(/\s\s+/g, ' ').trim().toLowerCase();	
    let arr = str.split(/\s/);

    return arr.reduce( (obj, x) => {
      obj[x] = (obj[x]) ? ++obj[x] : 1;
      return obj; 
    }, {});                                             
    
  }
}

export default Words
