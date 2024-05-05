/* Q32. Checking Usernames: 
Do the following to create a program that simulates how websites ensure that everyone has a 
unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames 
are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print 
a message that the person will need to enter a new username. If a username has not been used, print 
a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be 
accepted: */



let current_users:string[] =["misbah","mahab","alishba","dua","Ayesha"];
let new_users:string[] =["misbah","Mahab","hina","mehak","humaira"];

for(let new_username of new_users){
   //convert the both current username and existence username in lowercase for case insensitive
   let LowerCase_username = new_username.toLowerCase()
   let found = false;                                    //agar app ko uper wale per kaam kerna perta he to peghlr kaam ker na he phir aage barhna he.


   for(let existence_username of current_users){
    if(existence_username.toLowerCase() === LowerCase_username){
    found = true;
    break;
    }
   }


   //print a message based on whether the username availabl eor not available.
if(found){
    console.log(`Username '${new_username}' is not available .please enter a new username.`);
    
}
else{ console.log(`Username '${new_username}' is available.`)}
}

