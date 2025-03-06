function moveZeroesToEnd(arr) {
    let nonZeroes = arr.filter(num => num !== 0);
    let zeroes = arr.filter(num => num === 0);
    return [...nonZeroes, ...zeroes];
}

// Example
console.log(moveZeroesToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
