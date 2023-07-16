// An object- a group of properties and methodds
//              properties:- what an object has;
//              methods:- What an object can do 
//              use "." dot operator


const car = {
    model: "Ford",
    color: "black",
    year: 2020,

    drivable: function () {
        // "this" is a keyword used to referance the current class or immediate context
        console.log(`${this.model} Can be driven`);
    }
};

car.drivable();