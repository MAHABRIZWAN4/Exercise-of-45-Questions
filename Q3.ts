/* Q3. Name Cases: 
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.*/
let personName = "MahabRizwan";
console.log("LowerCase: " + personName.toLowerCase());
console.log("UpperCase: " + personName.toUpperCase());
let titleCase = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("titleCase: " + titleCase);