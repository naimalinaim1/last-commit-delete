// before es6 es2015 function declare
function add (first = 0, second = 0) {
    const result = first + second;
    return result;
}

const total = add(1, 1);
console.log(total);


// function expression
const add1 = function myAdd (first = 0, second = 0) {
    const result = first + second;
    return result;
}
// function expression with anonymous function
const add2 = function (first = 0, second = 0) {
    const result = first + second;
    return result;
}

const sum1 = add1(2,2)
const sum2 = add2(2,2)
console.log(sum1);
console.log(sum2);

// after es6 es2015 function declare
const add3 = (first, second) => first + second;
const newAdd = add3(23, 32);
console.log(newAdd);