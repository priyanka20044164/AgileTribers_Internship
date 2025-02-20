function productOrSum(a, b) {
    const product = a * b;
    return product > 500 ? a + b : product;
}

console.log(productOrSum(20, 30)); 
console.log(productOrSum(10, 20)); 
