function modifyAndExpand(arr) {
    let result = [];
    arr.forEach(num => {
        result.push(num, num / 2, num * 2);
    });
    return result;
}

// Example
console.log(modifyAndExpand([5, 10, 20, 2, 0, 33, 100, 90]));
// Output: [5, 10, 15, 20, 2, 22, 0, 33, 33, 100, 100, 90, 90, 190]
