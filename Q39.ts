/* Q39. City Names: 
Write a function called city_country() that takes in the name of a city and its country. The 
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least 
three city-country pairs, and print the value that’s returned. */

function city_country(city:string , country:string):string {
    return `${city} is in ${country}`
}
//calling the function with three country pairs
let city1 = city_country("London","England")
let city2 = city_country("Lahore","pakistan")
let city3 = city_country("Tokyo","japan")

//Printing the values returned by the function
console.log(city1);
console.log(city2);
console.log(city3);

