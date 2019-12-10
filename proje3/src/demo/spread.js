const arr = ["istanbul","ankara","izmir"]

const arr2 = arr.concat(["adana"])

const arr3 = [...arr, "mardin"]

const person = {
    firstName: "Kazım",
    lastName: "Etiksan"
}

const newPerson = {
    ...person,
    age: "39",
    firstName: "Hasan"
}



