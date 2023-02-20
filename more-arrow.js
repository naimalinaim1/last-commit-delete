const add = (first, second) => first + second;
const getFullName = (first, last) => `${first} ${last}`;
const multiply = (a, b) => a * b;

const mul = multiply(3, 4);
console.log(mul);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => Math.PI;
const pi = getPie();
console.log(pi);

// one parameter 
const doubleIt = (num) => num * 2;
console.log(doubleIt(2));

// one parameter simple version
const fiveTimes = num => num * 5;
console.log(fiveTimes(5));

const multilineFun = (x, y, z) => {
    const firstAdd = x + y;
    const secondAdd = y + z;
    const multiResult = firstAdd * secondAdd;
    const result = multiResult / 2;
    return result;
}
const knownMath = multilineFun(2, 3, 4);
console.log(knownMath);