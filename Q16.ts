/* Q16. More Guests: 
You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */

let gueslist3:string[] = ["Amna","Misbah","Mahnoor"];

// Person you can't come in dinner.
let cannot_come1:string = gueslist3[0]
console.log(`${cannot_come1}, you can't make dinner.`);

// Now person who attend dinner replace amna
let person1:string = "Ayesha";
gueslist3[gueslist3.indexOf(cannot_come1)] = person1

// Now print a message to all in my list.

/*gueslist3.forEach(name => {
    console.log(`Dear ${name}, you are invited to dinner.`);
});
*/

// Here print new message to your invited guest.
gueslist3.forEach(name => {
    console.log(`Dear ${name}, I found  a bigger dinner.So I invited more guests.`);
});


// • Add one new guest to the beginning of your array.
let beginning_guest:string ="Dua";
gueslist3.unshift(beginning_guest)

//• Add one new guest to the middle of your array.
let middle_guest:string = "Mehak";
let index = gueslist3.length/2
gueslist3.splice(index,0,middle_guest)

//• Use append() to add one new guest to the end of your list.
let end_guest:string ="Rashida";
gueslist3.push(end_guest)

// • Print a new set of invitation messages, one for each person in your list. 
gueslist3.forEach(name => {
    console.log(`Dear ${name},You are invited for dinner.`);
});