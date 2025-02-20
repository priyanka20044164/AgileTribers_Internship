function divisibleByFive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 5 === 0) {
            console.log(arr[i]);
        }
    }
}
divisibleByFive([5, 12, 20, 33, 45]);
