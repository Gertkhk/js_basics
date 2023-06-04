console.log("hello world!")

// variables
let name = "Gert Sarv"
name = "New name"

// const - ei saa ümber väärtustada
const surname = "Sarv"
// surname = "New surname" - error

// arrays
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers.push(6)
console.log(numbers)

// objects
const person = {
    firstname: 'Gert',
    surname: 'Sarv'
}

console.log(person)
console.log(person.firstname)
console.log(person.surname)
person.department = "IKT"
console.log(person.department)