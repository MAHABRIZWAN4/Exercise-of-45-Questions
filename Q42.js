"use strict";
/* Q42. Great Magicians:
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified: */
Object.defineProperty(exports, "__esModule", { value: true });
let magicians_name1 = ["Rizwan", "Ali Asghar", "Aman"];
// Make a function
function show_magicians1(magicians_name1) {
    magicians_name1.forEach(magicians => {
        console.log(magicians);
    });
}
//Again make a function
function make_great(magicians_name1) {
    magicians_name1.forEach(magicians => {
        console.log("-The great magician " + magicians + ".");
    });
}
make_great(magicians_name1);
