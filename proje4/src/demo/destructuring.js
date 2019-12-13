// const person = {
//     firstName: "Kazım",
//     lastName: "Etiksan"
// }

// const person2 = {
//     firstName: "Hasan",
//     lastName: "Demir",
//     age: 30
// }

// console.log(person.firstName)

// const {firstName='defaultFirstName',lastName,age=39} = person2

// console.log(age)


const someData = {
    data: "İstanbul",
    location: "Marmara"
}

const someOtherData = {
    data: "Ankara",
    location: "Anadolu"
}

const {data:city='',location} = someData

console.log(city)

const {data='',location} = someOtherData