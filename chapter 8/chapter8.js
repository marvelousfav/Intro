// var dreamCar = {
//     make: "Oldsmobile",
//     model: "98",
//     color: "brown",
//     year: 1983,
//     bodyStyle: "Luxury Car",
//     price: 4500
//  }
//  alert("The type of dreamCar is: " + typeof dreamCar);

var dreamCar = {
    make: "Auidi",
    model: "R8",
    color: "red",
    year: 2020,
    bodyStyle: "Luxury Car",
    price: 4500
};
document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.
    color;
document.getElementById("body").innerHTML = dreamCar.make + " " +
    dreamCar.model;
