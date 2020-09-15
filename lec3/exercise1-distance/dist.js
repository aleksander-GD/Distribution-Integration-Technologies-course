function dist(array) {
    let result = 0;
    array.forEach(value => {
        result += Math.pow(value, 2);
    });
    return Math.sqrt(result);
}

console.log(dist([3, 4]));
console.log(dist([1, 2, 2]));
console.log(dist([]));