class List {
  constructor(alist=[]) {
    this.a = alist
  }
  compare(blist=new List()) {
    const a = this.a
    const b = blist.a
    let result = 'UNEQUAL'
    if (a.length===0 || b.length===0) {
      if (a.length===0) {result = 'SUBLIST'}
      if (b.length===0) {result = 'SUPERLIST'}
      if (a.length===0 && b.length===0) { result='EQUAL'}
    } else if (a.length===b.length) {
      if (a.join()===b.join()) {result='EQUAL'}     
    } else if (a.length > b.length) {
      if (new RegExp(b.join()).test(a.join())) {result = 'SUPERLIST'} 
    } else if (a.length < b.length) {
      if (new RegExp(a.join()).test(b.join())) {result = 'SUBLIST'}
    }
    return result
  }
}


export default List;