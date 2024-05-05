"use strict";
/* Q12. Greetings:
Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be
personalized with the person’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
// Reapeat array of Exercise 11
let friends_name1 = ["Amna", "Farzana", "Alishba", "Misbah"];
// print a personalized message to each friends
friends_name1.forEach(name => { console.log(`Dear ${name}, Have a graet day.`); });
