function arrayWrapper(nums, operation) {
    if (operation.toLowerCase() === "add") {
        return nums.flat().reduce((sum, num) => sum + num, 0);
    } else if (operation.toLowerCase() === "string") {
        return nums.flat();
    }
}

// Examples
console.log(arrayWrapper([[1, 2], [3, 4]], "Add"));   // Output: 10
console.log(arrayWrapper([[23, 98], [42, 70]], "String")); // Output: [23, 98, 42, 70]
