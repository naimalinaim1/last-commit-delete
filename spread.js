const max = Math.max(1, 2, 3, 4, 5);
console.log(max);

const numbers = [1, 2, 3, 4, 5, 6];
const largest = Math.max(...numbers);
console.log(...numbers);
console.log(largest);

const numbers2 = [...numbers];
numbers.push(7);
numbers2.push(8);
console.log(numbers);
console.log(numbers2);

const numbers3 = [11, 22, ...numbers, 33, 44];
console.log(numbers3)
