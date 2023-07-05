/* A variable is a container that stores values inside them */

/* its a 2 step Process 

1 - declare the variable
2 - initalize the variable with a value

*/


let studentName = "Adith"; // String
let studentAge = 20; // Age
let student = false; // Boolean

console.log("Hello, ", studentName);
console.log("Your Age is: ", studentAge);
console.log(student);


document.getElementById("p1").innerHTML = `Hello ${studentName}`;
document.getElementById("p2").innerHTML = `Age: ${studentAge}`;
document.getElementById("p3").innerHTML = `Enrolled: ${student}`;


