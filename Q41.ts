/* 41. Magicians: 
Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array. */

let magicians_name:string[] = ["Rizwan","Ali Asghar","Aman"];

// Make a function
function show_magicians(magicians_name:string[]):void{
    magicians_name.forEach(magicians => {
        console.log("-"+magicians);
        
    });
}

// call the function and show the magicians
show_magicians(magicians_name)