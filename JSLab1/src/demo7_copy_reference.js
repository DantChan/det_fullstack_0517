let number1 = 1
const number2 = number1
console.log(number1, number2)
number1 = 5
console.log(number1, number2)
const person = {name:"Mark"}
const secondPerson = person
const thirdPerson = {...person}
console.log(person, secondPerson, thirdPerson)
person.name='John'
console.log(person, secondPerson, thirdPerson)
const x1 = [1,2,3,4,5]
const x2 = {name:"Mark"}
console.log(typeof x1, typeof x2)
console.log(Array.isArray(x1), Array.isArray(x2))