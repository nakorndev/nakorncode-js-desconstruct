const input1 = ['a', 'b', 'c']
const input2 = ['d', 'e', 'f'] // 'd', 'e', 'f'

console.log([input1, input2])
// [[a, b, c], [d, e, f]]

console.log(input1.concat(input2))

console.log([...input1, ...input2])
// [a, b, c, d, e, f]

const nums = [4, 2, 5, 3, 1]

console.log(Math.min(...nums))
console.log(Math.max(...nums))
// Math.min([])
// Math.min(, , ,)
