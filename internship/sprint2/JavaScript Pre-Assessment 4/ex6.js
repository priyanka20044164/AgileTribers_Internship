function swapNumbers(a, b) {
    console.log(`Before Swap: a = ${a}, b = ${b}`);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`After Swap: a = ${a}, b = ${b}`);
}

// Example
swapNumbers(5, 10);
