// How To get user input


// Easy Way 

let userName = window.prompt("What's Your Username ")
console.log(userName)


// Difficult way

document.getElementById("submit").onclick = function () {
    let username = document.getElementById("usr").value;
    document.getElementById("heading1").innerHTML = `Hello, ${username.charAt(0).toUpperCase() + username.slice(1)}`

}