/* Q24. More Conditional Tests: 
You don’t have to limit the number of tests you create to 10. If you want to try more 
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in an array
• Test whether an item is not in an array.
*/


//• Tests for equality and inequality with strings
let name1:string = "Mahab";
let name2:string = "Amna";

console.log("Is name1 is equal to Mahab ? I predict true.");     //true condition
console.log(name1 === "Mahab");

console.log("Is name1 is equal to name2 ? I predict true.");     //false condition
console.log(name1 === name2);

//• Tests using the lower case function
let name3:string ="Mahab Rizwan";
let name4:string = name3.toLowerCase()

console.log("Is name3 is not equal to  name4? I predict true.");    //true condition
console.log(name3 !== name4);

console.log("Is name3 is equal to  name4? I predict false.");    //false condition
console.log(name3 === name4);


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal 
// to, and less than or equal to.


let num1:number = 2;
let num2:number = 4;

console.log("Is num1 == 2? I predict true.");                              //true condition
console.log(num1 == 2);
console.log("Is num1 == num2? I predict false.");                          //false condition
console.log(num1 == num2);

console.log("Is num1 is less than num2? I predict true.");                  //true condition
console.log(num1 < num2);
console.log("Is num1 is greater than num2? I predict true.");               //false condition
console.log(num1 > num2);

console.log("Is num1 is less than equal to num2? I predict true.");          //true condition
console.log(num1 <= num2);
console.log("Is num1 is greater than equal to num2? I predict false.");       //false condition
console.log(num1 >= num2);

//• Tests using "and" and "or" operators
let boolean1:boolean = true; 
let boolean2:boolean = false;

console.log("Is boolean1 is true and boolean2 is false ? I predict true.");           //true condition 
console.log(boolean1 || boolean2);

console.log("Is boolean1 is true and boolean2 is false ? I predict false.");          //falsecondition 
console.log(boolean1 && boolean2);

//• Test whether an item is in an array
 let array:number[] = [1,2,3,4,5,6,7,8,9];
 
 console.log("Is number 4 is in the array ? I predict true.");                  //true condition 
 console.log(array.includes(3));

 //• Test whether an item is not in an array.
 console.log("Is number 15 is not in the array ? I predict false.");                  //false condition 
 console.log(array.includes(14));


 
