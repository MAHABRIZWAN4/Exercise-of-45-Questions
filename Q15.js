"use strict";
/* Q15. Changing Guest List:
You just heard that one of your guests can’t make the dinner, so you need to send out a new
set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person
you are inviting.
• Print a second set of invitation messages, one for each person who is still
in your list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let gueslist2 = ["Amna", "Misbah", "Mahnoor"];
// Person you can't come in dinner.
let cannot_come = gueslist2[0];
console.log(`${cannot_come}, you can't make dinner.`);
// Now person who attend dinner replace amna
let person = "Ayesha";
gueslist2[gueslist2.indexOf(cannot_come)] = person;
// Now print a message to all in my list.
gueslist2.forEach(name => {
    console.log(`Dear ${name}, you are invited to dinner.`);
});
