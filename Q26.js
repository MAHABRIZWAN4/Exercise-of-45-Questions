"use strict";
/* Q26. Alien Colors #2:
Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the
alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color2 = "green";
//Now create a passing condition
if (alien_color2 === "green") {
    console.log("Congratulations!You just earned 5 points for shooting green alien.");
}
else {
    console.log("Congratulations!You just earned 10 points for shooting red alien.");
}
//Now create failing condition
let alien_color3 = "green";
if (alien_color3 === "red") {
    console.log("Congratulations!You just earned 5 points for shooting green alien.");
}
else {
    console.log("Congratulations!You just earned 10 points for shooting red alien.");
}
