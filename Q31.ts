/* Q31. No Users: 
Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let friends_name:string[] = ["amna","farzana","razia"];


//check if the list of array is not empty
if(friends_name.length > 0){
//loop through th array and print each user.
for(let user of friends_name){
    console.log("User:" + user);
}
}
else{console.log("we need to find some user")}


//Again make an array 
let null_name:string[] = [];
//check if the list of array is empty
if(null_name.length > 0){
//loop through th array and print each user.
for(let user of null_name){
    console.log("User:" + user);
}
}
else{console.log("we need to find some user")}