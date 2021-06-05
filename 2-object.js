const user = { name: 'John', age: 18 }

// const name = user.name
// const age = user.age

const { name: fullName, age: johnAge } = user
console.log(fullName, johnAge)

function getScreenSize({ width, height }) {
    return `${width}x${height} px`
}
console.log(getScreenSize({ width: 1920, height: 1080 }))
