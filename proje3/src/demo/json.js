const createPerson = ({
    firstName="Kazım",
    lastName="Etiksan"
}) => {
    return {
        firstName,
        lastName
    }
}

const person = createPerson("Kazım")

console.log(person.firstName)