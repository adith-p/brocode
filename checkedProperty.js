let visaBtn = document.getElementById("visaBtn");
let masterBtn = document.getElementById("masterBtn");
let rupayBtn = document.getElementById("RupayBtn");


document.getElementById("submit").onclick = function () {
    if (visaBtn.checked) {
        alert("You are paying with Visa");
    }
    else if (masterBtn.checked) {
        alert("You are paying with Master Card")
    }
    else if (rupayBtn.checked) {
        alert("You are paying with Rupay")
    }
    else {
        alert("Please Select a valid Payment Method")
    }




}