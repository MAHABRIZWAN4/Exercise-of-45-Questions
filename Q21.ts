//Q21. They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.

// first create an object
let student_name:mytype = {
     Name:"Mahab Rizwan",
     Id_No:463641,
     Year:2024,
     Course:{IT:["Web 3.0 mataverse and Artificial Intelligence(AI)",1] }
}
console.log(student_name);

//Then give its data type
type mytype = {
    Name:string,
    Id_No:number,
    Year:number,
    Course:myinter
};
interface myinter{
    IT:(string|number)[]
}


 

