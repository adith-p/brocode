let prices = [89, 3633, 44, 588, 6, 66, 41];

let total = prices.reduces(checkOut);

console.log(`the total is ${total}`);

function checkOut(total, element) {
    return total + element;

}