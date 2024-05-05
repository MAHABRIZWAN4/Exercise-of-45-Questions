"use strict";
/* Q45. Cars:
Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.*/
Object.defineProperty(exports, "__esModule", { value: true });
function carInfo(manufacturer, model_name, options) {
    return {
        manufacturer: manufacturer,
        model_name: model_name,
        ...options
    };
}
// call the function withb required information and addiioanl name-value pairs.
let car = carInfo("Toyota", "5858", { color: "Red", year: "2024" });
//print the returned object
console.log(car);
