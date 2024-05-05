/* Q44. Sandwiches: 
Write a function that accepts an array of items a person wants on a sandwich. The function 
should hvave one parameter that collects as many items as the function call provides, and it should 
print a summary of the sandwich that is being ordered. Call the function three times, using a different 
number of arguments each time.*/


function ordered_sandwich(...items:string[]):void{
    console.log("You ordered a delicious sandwich with following items.");
    items.forEach(item => {console.log("-" + item);}
    );
  console.log("ENJOY YOUR DELICIOUS SANDWICH");
}

ordered_sandwich("Bread","tomato","onion")
ordered_sandwich("Bread","tomato sause","Chilli garlic sause","Mayonnaise")
ordered_sandwich("Bread","jelly","Peanut butter")
