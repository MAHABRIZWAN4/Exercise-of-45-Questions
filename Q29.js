"use strict";
/* Q29. Favorite Fruit:
Make an array of your favorite fruits, and then write a series of independent if statements that
check for certain fruits in your array.
• Make an array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
is in your array, the if block should print a statement,
such as You really like bananas!
*/
Object.defineProperty(exports, "__esModule", { value: true });
let favorite_fruits = ["mango", "banana", "strawberry"];
if (favorite_fruits.includes("mango")) {
    console.log("Wow! You really like mango.");
}
if (favorite_fruits.includes("banana")) {
    console.log("Wow! You really like mango.");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("Wow! You really like mango.");
}
if (favorite_fruits.includes("apple")) {
    console.log("Wow! You really like apple.");
}
else {
    console.log("apple is not in your list of favourite fruit.");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("Wow! You really like watermelon.");
}
else {
    console.log("watermelon is not in your list of favourite fruit.");
}
