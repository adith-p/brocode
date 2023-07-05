/* Type Converision */
/* change one type to another such as string to numbers, numbers to string ... */


let age = window.prompt("Enter your Age... ")

/*
age += 1 
Here the output will be "201" (string) bcz every thing recived through window promt will be str 
*/

age = Number(age) // The Number() is a constructor that converts 
age += 1

console.log(`Happy Birthday you are ${age} old `)


let x;
let y;
let z;
let j;

x = String(3.14);
y = Number("3.14");
z = Boolean("");
j = Boolean("a");

console.log(x, typeof (x));
console.log(y, typeof (y));
console.log(z, typeof (z));
console.log(j, typeof (j));

/*3.14 string 
3.14 number 
false boolean 
true boolean */