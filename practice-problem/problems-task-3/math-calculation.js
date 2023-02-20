const mathCal = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number * number;
    }

    return sum / numbers.length;
}

const arr = [1, 2, 3];
 console.log(mathCal(arr));