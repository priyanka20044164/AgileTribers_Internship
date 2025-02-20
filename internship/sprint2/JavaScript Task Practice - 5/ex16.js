function productOrSum(a, b) {
    let product = a * b;
    return product > 500 ? a + b : product;
}
console.log(productOrSum(20, 30));
