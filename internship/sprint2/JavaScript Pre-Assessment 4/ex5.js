function removeSpaces(str) {
    let result = "";
    for (let char of str) {
        if (char !== " ") {
            result += char;
        }
    }
    return result;
}

// Example
console.log(removeSpaces("Remove spaces from a string")); // Output: "Removespacesfromastring"
