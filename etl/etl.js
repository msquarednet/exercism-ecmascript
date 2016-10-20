const transform = function(obj) {
  let newObj = {};
  for (let i in obj) {	//console.log(i, obj[i]);
    obj[i].forEach( letter => newObj[letter.toLowerCase()] = Number(i) );
  }
  return newObj;  
}

export default transform;