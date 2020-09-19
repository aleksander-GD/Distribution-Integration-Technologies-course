function dist(array) {
    let result = 0;
    array.forEach(value => {
        result += Math.pow(value, 2);
    });
    return Math.sqrt(result);
}

function dist2(array) {
    return Math.sqrt(array.map(number => Math.pow(number, 2)).reduce((sum, current) =>
        sum += current, 0));
}
console.log(dist([3, 4]));
console.log(dist([1, 2, 2]));
console.log(dist([]));

console.log(dist2([3, 4]));
console.log(dist2([1, 2, 2]));
console.log(dist2([]));