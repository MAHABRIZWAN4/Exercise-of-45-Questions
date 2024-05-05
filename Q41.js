"use strict";
/* 41. Magicians:
Make an array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array. */
Object.defineProperty(exports, "__esModule", { value: true });
let magicians_name = ["Rizwan", "Ali Asghar", "Aman"];
// Make a function
function show_magicians(magicians_name) {
    magicians_name.forEach(magicians => {
        console.log("-" + magicians);
    });
}
// call the function and show the magicians
show_magicians(magicians_name);
