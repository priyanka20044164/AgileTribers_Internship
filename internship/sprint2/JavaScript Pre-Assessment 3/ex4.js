function removeElement(arr, value) {
    return arr.filter(item => item !== value);
}

console.log(removeElement([3, 2, 2, 3], 3)); 
