let arr2 = [5, 10, 15, 20, 23];
let replacedOdds = arr2.map(num => num % 2 !== 0 ? 0 : num);
console.log(replacedOdds);