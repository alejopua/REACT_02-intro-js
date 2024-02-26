// Destructuring Object
interface Person1 {
    nameUser: string;
    age: number;
    country: string;
}

const person1: Person1 = {
    nameUser: 'Peter',
    age: 30,
    country: 'CO',
}

// const { nameUser: name1, age } = person1;
// console.log(name1, age);

const contex = ({nameUser, age = 25, country}: Person1) => {
    return {
        user: nameUser,
        anios: age,
        nationality: {
            country,
            city: 'Bogota'
        },
    }
}

const {user, anios, nationality} = contex(person1)
// const {country, city} = nationality;
console.log(user, anios, nationality);