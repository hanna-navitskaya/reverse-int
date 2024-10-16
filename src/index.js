module.exports = function reverse (n) {
    const numberAsString = n.toString().split("").reverse().join("");
    return Number.parseInt(numberAsString); 
}
