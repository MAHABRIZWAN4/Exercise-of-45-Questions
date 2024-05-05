"use strict";
//Q21. They think of something you could store in a TypeScript Object. Write a program that creates 
//Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
// first create an object
let student_name = {
    Name: "Mahab Rizwan",
    Id_No: 463641,
    Year: 2024,
    Course: { IT: ["Web 3.0 mataverse and Artificial Intelligence(AI)", 1] }
};
console.log(student_name);
