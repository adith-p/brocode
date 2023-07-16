let fruits = ["Apple", "orange", "banana"];


fruits.unshift("mango"); // add values to the 1st index
console.log(fruits);

fruits.shift(); // removes values from the 1st index
console.log(fruits);

console.log(fruits.pop()); // removes the last element of the array
console.log(fruits);


console.log(fruits.length); // returns the length of the array

console.log(fruits.indexOf("Apple"));

console.log(fruits[1]);


// Looping through array
// in accending order using a for loop

let prices = [12, 5, 25, 78, 5, 96, 2, 3];


for (let i = 0; i < prices.length; i++) {
    console.log(prices[i]);
}

// Reversing an array

for (let i = prices.length - 1; i >= 0; i--) {
    console.log(prices[i])
}


// An diffrent way

for (let price of prices) {
    console.log(price);
}