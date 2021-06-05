// constructor oop
// construct [a, b, c]
// deconstruct let a, let b, let c
const fruits = ['apple', 'banana', 'cherry']

// const a = fruits[0]
// const b = fruits[1]
// const c = fruits[2]

const [a, b, c] = fruits

console.log(a, b, c)

const user = { name: 'John', age: 18, gender: 'male' }

for (let [key, value] of Object.entries(user)) {
    console.log(key, value)
}
