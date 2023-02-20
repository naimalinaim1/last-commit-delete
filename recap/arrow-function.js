const addNum = (first, second = 0) => first + second;
const sum = addNum(12);
console.log(sum);

const multiCal = num => {
    const def = 123;
    const add = num + def;
    const result = add / 2;
    return result;
}
const multiCalculation = multiCal(112);
console.log(multiCalculation);