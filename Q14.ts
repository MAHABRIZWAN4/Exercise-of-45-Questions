/* Q14. Guest List: 
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner. */

let gueslist1:string[] = ["Amna","Misbah","Mahnoor"];

// print a message to each person, inviting them to dinner. 
gueslist1.forEach(name => {
    console.log(`Dear ${name},\nYou are invited to dinner,We would be honored to have your company.`);
});