interface Person {
    name: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    city: string;
    zip: number;
}

const person: Person = {
    name: 'Peter',
    lastName: 'Ramirez',
    age: 30,
    address: {
        city: 'Bogota',
        zip: 123456
    }
};

const person2: Person = {...person};

console.log(person);
person2.name = 'Diana';
console.log(person2);