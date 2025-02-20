function separateNumbers(arr) {
    let positive = arr.filter(num => num >= 0);
    let negative = arr.filter(num => num < 0);
    console.log(`Positive: ${positive}`);
    console.log(`Negative: ${negative}`);
}
separateNumbers([23, 4, -6, 23, -9, 21, 3, -45, -8]);
