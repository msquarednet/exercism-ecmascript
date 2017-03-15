const circularBuffer = function(len) {
  let arr = [];
  return {
    read: function() {
      if (arr.length) { return arr.shift()}      
      else {throw bufferEmptyException()}
    }, 
    write: function(val) {
      if (val) {
        if (arr.length<len) {arr.push(val)}        
        else {throw bufferFullException()}
      }
    }, 
    forceWrite: function(val) {
      if (val) {
        if (arr.length===len) {this.read()}
        this.write(val)
      }
    }, 
    clear: function() {arr.length=0}
  }
}

const bufferEmptyException = () => new Error('empty')
const bufferFullException  = () => new Error('full')




export {circularBuffer as default, bufferEmptyException, bufferFullException}
