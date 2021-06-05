console.log(true, 1, 'string', { o: 'bj' }, ['a', 'b', 'c'])

function sum(...nums) {
    return nums.reduce((prev, curr) => prev + curr, 0)
}

console.log(sum(1, 2, 3, 4, 5))
