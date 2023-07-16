// toLocalString()

// so basicaly used to represent numeric vaules respective to the the counrty 

//example 

let num = 123456789.369;

console.log(num.toLocaleString("hi-IN"));

console.log(num.toLocaleString("hi-IN", { style: "currency", currency: "INR" }));

console.log(num.toLocaleString("en-US"));
console.log(num.toLocaleString("en-US", { style: "currency" }));