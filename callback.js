// function which is passed as an argument to another function is known as callback

sum(5, 6, displayConsole);


function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

