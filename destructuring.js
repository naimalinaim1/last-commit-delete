const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '0177005500',
    price: 4000,
}

// not destructure
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

// object destructure
const {phone, color, price} = fish;
console.log(phone);
console.log(color);
console.log(price);

const {gender, age:myAge, other} = {name: 'naim', age: 18, gender: 'male'};
console.log(gender, myAge, other); // value of other undefined

const [first, another] = [12, 21, 22];
console.log(first, another);

const nayoks = ['bappi', 'khappi', 'jappi'];
const [king, cat, mouse] = nayoks;
console.log(cat);

function getNames () {
    return ['Alim', 'Halim'];
}
const [baap, chacha] = getNames();
console.log(baap, chacha);