const obj = {
    id: 123,
    name: 'naim',
    email: 'naimalinaim1@gmail.com',
    password: 'secret',
}
const {name, email} = obj;
console.log(name, email);

const names = ['alamin', 'naim', 'others'];
const [firstName, secondName] = names;
console.log(firstName);