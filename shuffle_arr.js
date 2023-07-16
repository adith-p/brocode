
function shuffle(arr) {
    let currentIndex = arr.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        currentIndex--;

        let temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;

    }

}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


shuffle(list);
list.forEach(no => console.log(no));