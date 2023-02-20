const numbers = [1, 2, 3, 4, 5];
const maxNum = Math.max(...numbers);
console.log(maxNum);

const newNum = [11, 12, ...numbers, 21, 22];
console.log(newNum);