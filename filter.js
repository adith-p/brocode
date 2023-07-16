let age = [12, 17, 25, 33, 65, 41, 25, 85];

let adults = age.filter(adult);

adults.forEach(print);

function adult(element) {
    return element >= 18;
}

function print(element) {
    console.log(element);
}