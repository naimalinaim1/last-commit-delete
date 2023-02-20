const maxArrayValue = (arr1, arr2) => {
    const combineArray = [...arr1, ...arr2];
    const max = Math.max(...combineArray);
    return max;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const maxArr = maxArrayValue(arr1, arr2);
console
.log(maxArr);