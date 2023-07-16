// function get temp from user onClick
// pass the converted value
let celcius = document.getElementById("celcius");
let farenheit = document.getElementById("farenheit");


document.getElementById("submitBtn").onclick = function () {
    let userTemp = Number(document.getElementById("userTemp").value);


    if (celcius.checked) {
        alert(`${userTemp}°F in celsius is ${to_celsius(userTemp).toFixed(2)}°C `);
    }
    else if (farenheit.checked) {
        alert(`${userTemp}°C in farenheit is ${to_farenheit(userTemp).toFixed(2)}°F `);

    } else {
        alert("Select a Valid option");

    }


}

// function convert celcius to farenheit
function to_farenheit(c_temp) {
    // (c_temp * 9/5) + 30
    return (c_temp * 9 / 5) + 32


}

// function convert farenheit to celcius
function to_celsius(f_temp) {
    //(f_temp - 32) * 5/9
    return (f_temp - 32) * 5 / 9

}

