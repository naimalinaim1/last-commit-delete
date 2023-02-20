function addNumbers (first, second = 0) {
    // second = second || 0;
    const sum = first + second;
    return sum;
}

const total = addNumbers(12);
console.log(total);