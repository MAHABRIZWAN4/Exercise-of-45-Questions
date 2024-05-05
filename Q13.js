"use strict";
/* Q13. Your Own Array:
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
that stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.” */
Object.defineProperty(exports, "__esModule", { value: true });
let transportation = ["Car", "Train", "Rickshaw", "Motorcycle", "Boat", "Aeroplane", "Helicopter", "Scooter"];
// Print statement about each mode of transportation.
transportation.forEach(name => {
    console.log(`I would like to own a ${name}.`);
});
