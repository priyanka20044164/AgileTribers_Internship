function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) fact *= i;
    return fact;
}
let arr = [2, 3, 4, 5];
arr.forEach(num => console.log(factorial(num)));
