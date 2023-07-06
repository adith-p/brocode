// sqrt(a*2 + b*2)

// let a = window.prompt("Enter the Height(a)... ");
// let b = window.prompt("Enter the Base(b)...");

document.getElementById("submit").onclick = function () {
    let a = Number(document.getElementById("sideA").value);
    let b = Number(document.getElementById("sideB").value);

    let c = Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)))

    alert(`The side C is : ${c}`)



}



