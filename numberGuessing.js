let randomNumber = Math.floor((Math.random() * 10) + 1);
let guess = 0;

document.getElementById("submitBtn").onclick = function () {


    let userNum = Number(document.getElementById("myNumber").value);
    console.log(userNum, randomNumber);

    guess++;



    if (userNum == randomNumber) {
        alert(`The Guess ${userNum} is correct and it took you ${guess} Guesses.`);
    } else if (userNum > randomNumber) {
        alert(`The Guess ${userNum} is greater than The random number.`);
    } else {
        alert(`The Guess ${userNum} is less than The random number.`)
    }



}