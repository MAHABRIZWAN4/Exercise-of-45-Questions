"use strict";
/* Q19. Dinner Guests:
Working with one of the programs from Exercises 14 through 18, print a message indicating
the number of people you are inviting to dinner. */
Object.defineProperty(exports, "__esModule", { value: true });
let guestlist5 = ["Amna", "Misbah", "Mahnoor"];
// Person you can't come in dinner.
let cannot_come3 = guestlist5[0];
//console.log(`${cannot_come3}, you can't make dinner.`);
// Now person who attend dinner replace amna
let person3 = "Ayesha";
guestlist5[guestlist5.indexOf(cannot_come3)] = person3;
// Now print a message to all in my list.
/*guestlist5.forEach(name => {
    console.log(`Dear ${name}, you are invited to dinner.`);
});
*/
// Here print new message to your invited guest.
guestlist5.forEach(name => {
    //console.log(`Dear ${name}, I found  a bigger dinner.So I invited more guests.`);
});
// • Add one new guest to the beginning of your array.
let beginning_guest2 = "Dua";
guestlist5.unshift(beginning_guest2);
//• Add one new guest to the middle of your array.
let middle_guest2 = "Mehak";
let index2 = guestlist5.length / 2;
guestlist5.splice(index2, 0, middle_guest2);
//• Use append() to add one new guest to the end of your list.
let end_guest2 = "Rashida";
guestlist5.push(end_guest2);
//• Print a new set of invitation messages, one for each person in your list. 
guestlist5.forEach(name => {
    // console.log(`Dear ${name},You are invited for dinner.`);
});
console.log(guestlist5.length + " " + "guest are invited for a dinner.");
