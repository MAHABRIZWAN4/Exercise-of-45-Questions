/* Q17. Shrinking Guest List: 
You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you 
pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
actually have an empty list at the end of your program. */

let guestlist4:string[] = ["Amna","Misbah","Mahnoor"];

// Person you can't come in dinner.
let cannot_come2:string = guestlist4[0]
console.log(`${cannot_come2}, you can't make dinner.`);

// Now person who attend dinner replace amna
let person2:string = "Ayesha";
guestlist4[guestlist4.indexOf(cannot_come2)] = person2

// Now print a message to all in my list.

/*guestlist4.forEach(name => {
    console.log(`Dear ${name}, you are invited to dinner.`);
});
*/

// Here print new message to your invited guest.
guestlist4.forEach(name => {
    console.log(`Dear ${name}, I found  a bigger dinner.So I invited more guests.`);
});


// • Add one new guest to the beginning of your array.
let beginning_guest1:string ="Dua";
guestlist4.unshift(beginning_guest1)

//• Add one new guest to the middle of your array.
let middle_guest1:string = "Mehak";
let index1 = guestlist4.length/2
guestlist4.splice(index1,0,middle_guest1)

//• Use append() to add one new guest to the end of your list.
let end_guest1:string ="Rashida";
guestlist4.push(end_guest1)

// • Print a new set of invitation messages, one for each person in your list. 
/*guestlist4.forEach(name => {
    console.log(`Dear ${name},You are invited for dinner.`);
});
*/
console.log("I have for only two guess.");

// Remove guests by using while loop and pop

console.log(guestlist4);
while(guestlist4.length>2){
       let remove_person = guestlist4.pop()
       //print message for those who can't invite.
       console.log(`Dear ${remove_person},Sorry I can't invite you for a dinner.`);
}
// print message for those whoa re still invite.
guestlist4.forEach(name => {
    console.log(`Dear ${name},You are still invited to dinner!.`);
})

guestlist4.pop()
guestlist4.pop()
console.log(guestlist4);



