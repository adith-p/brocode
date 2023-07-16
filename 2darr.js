// 2D array : Is an array of arrays 

let fruits = ["mangoes", "Apples", "oranges"];
let vegies = ["carrots", "onions", "poatatos"];
let meats = ["eggs", "chicken", "fish"];


let groceryList = [fruits, vegies, meats];

groceryList[0][1] = "Grapes";

for (let lists of groceryList) {
    for (let items of lists) {
        console.log(items);
    }

}

