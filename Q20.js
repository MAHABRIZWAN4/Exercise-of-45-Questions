"use strict";
/* Q20. Think of something you could store in an array. For example, you could make a list of mountains,
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list
containing these items.*/
Object.defineProperty(exports, "__esModule", { value: true });
let rivers = ["Indus", "Ravi", "Jhelum", "Chenab"];
//making list by using forEach
rivers.forEach(names => {
    console.log("-" + names);
});
