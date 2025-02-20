let sum = 0;
let input;
do {
    input = parseInt(prompt("Enter a number (0 to stop):"));
    sum += input;
} while (input !== 0);
console.log(sum);