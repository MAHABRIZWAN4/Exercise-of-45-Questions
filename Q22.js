"use strict";
/* Q22. Intentional Error:
If you haven’t received an array index error in one of your programs yet, try to make one happen.
Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program. */
Object.defineProperty(exports, "__esModule", { value: true });
let friends_name = ["Mahab", "Amna", "Alishba", "Misbah"];
//produce an index error
console.log(friends_name[6]);
//Now solve it
console.log(friends_name[3]);
