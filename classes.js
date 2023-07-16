class car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    details() {
        console.log(this.model);

    }
}

let bmw = new car("classA", "2020", "980000");

bmw.details()