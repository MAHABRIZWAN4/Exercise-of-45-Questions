/* Q43. Unchanged Magicians: 
Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
of magicians’ names. Because the original array will be unchanged, return the new array and store it 
in a separate array. Call show_magicians() with each array to show that you have one array of the 
original names and one array with the Great added to each magician’s name.
*/


function show_magicians2(magicians_name2:string[]):void{
    magicians_name2.forEach(magicians => {
        console.log("-"+magicians);
        
    });
}

function make_great2(magicians_name1: string[]): string[] {
    return magicians_name1.map(magician => "The great magician " + magician);
}

// Define an array of magicians name.
let magicians_name2:string[] = ["Rizwan","Ali Asghar","Aman"];


let great_magicians5:string[] = make_great2([...magicians_name2]);


//call magician4 to show the original magician names

console.log("Origianl Magicians");
show_magicians2(magicians_name2);

console.log("\n great_magicians5:");
show_magicians2(great_magicians5);