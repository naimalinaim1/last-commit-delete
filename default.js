// before es6 
// default value set
function add (first, second) {
    if (second === undefined) {
        second = 0;
    }
    first = first || 0;
    const sum = first + second;
    return sum;
}
const sumToValue = add(1);
console.log(sumToValue);

// after es6
// default value set
function addFun (first = 0, second = 0) {
    const sum = first + second;
    return sum;
}
const total = addFun(1)
console.log(total);

function fullName (first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const myName = fullName('Gelam');
console.log(myName);