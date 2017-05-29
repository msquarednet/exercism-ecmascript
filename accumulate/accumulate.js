const accumulate = (arr, fn) => {
  const result = []
  arr.forEach(x => result.push(fn(x)))
  return result
}


export default accumulate