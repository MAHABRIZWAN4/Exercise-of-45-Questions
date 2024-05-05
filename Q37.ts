/* Q37. Large Shirts: 
Modify the make_shirt() function so that shirts are large by default, with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
size with a different message.
*/

function make_shirt2(size:string,message:string):void {
    console.log(`You have ordered a ${size} size of shirt with a message:"${message}."`);
}



//Calling a function
make_shirt2("large","I love TypeScript")

//Create a medium shirt with default message.
make_shirt2("medium","I love TypeScript")

//create a shirt of any size with any message.
make_shirt2("small","Coding is a fuel that powers the engines of innovation");
