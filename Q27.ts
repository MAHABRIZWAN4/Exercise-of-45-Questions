/* Q27. Alien Colors #3: 
Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.
• If the alien is red, print a message that the player earned 15 points.
• Write three versions of this program, making sure each message is printed for the appropriate color 
alien.
*/

let alien_color4:string = "green";
if(alien_color4 === "green"){
    console.log("Congratulatons!You earned a 5 points for shooting green alien.");
}
else if(alien_color4 === "yellow"){
    console.log("Congratulatons!You earned a 10 points for shooting yellow alien.");
}
else if(alien_color4 === "red"){
    console.log("Congratulatons!You earned a 15 points for shooting red alien.");
}

//Now create an another variable.
let alien_color5:string = "yellow";
if(alien_color5 === "green"){
    console.log("Congratulatons!You earned a 5 points for shooting green alien.");
}
else if(alien_color5 === "yellow"){
    console.log("Congratulatons!You earned a 10 points for shooting yellow alien.");
}
else if(alien_color5 === "red"){
    console.log("Congratulatons!You earned a 15 points for shooting red alien.");
}

//Now again create an another variable.
let alien_color6:string = "red";
if(alien_color6 === "green"){
    console.log("Congratulatons!You earned a 5 points for shooting green alien.");
}
else if(alien_color6 === "yellow"){
    console.log("Congratulatons!You earned a 10 points for shooting yellow alien.");
}
else if(alien_color6 === "red"){
    console.log("Congratulatons!You earned a 15 points for shooting red alien.");
}