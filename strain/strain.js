const divy = (list, fn, bool) => {
  const karr = []
  const darr = []
  list.forEach( x => {
    if (fn(x)) {karr.push(x)} else {darr.push(x)}
  })
  return (bool) ? karr : darr
}

const strain = {
  keep    : (list, fn) => divy(list, fn, 1),
  discard : (list, fn) => divy(list, fn, 0)
}


export default strain