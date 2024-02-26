function client(nameF: string): string {
    return `Hello ${nameF}`;
}

const getUser = (name: string): object => ({
    uid: 'ABC123',
    username: name
});

const user1 = getUser('Fernando');
console.log(user1);