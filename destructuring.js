// ************* 07.03.22 ****************
console.log("******************* destructuring.js *********************");
//import { salaries } from './mapAndSet.js';

/*

Destructuring assignment
importance: 5

We have an object:

let user = {
  name: "John",
  years: 30
};

Write the destructuring assignment that reads:

    name property into the variable name.
    years property into the variable age.
    isAdmin property into the variable isAdmin (false, if no such property)

Here’s an example of the values after your assignment:

let user = { name: "John", years: 30 };

// your code to the left side:
// ... = user

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

*/
console.log(`**************** destructuring assignment ***************`);

let userJ = {
    name: "John",
    years: 30
};

let userV = {
    name: "Vony",
    years: 32,
    isAdmin: true
};

let name, age, isAdmin;
({ name, years: age, isAdmin = false } = userJ);
//console.log(name);
console.log(`${name} is ${age} y.o and is admin? ${isAdmin}`);
//let{years:age} = user;
//console.log(`Age= ${age}`);

//let{isAdmin = false} = user;
//console.log(`isAdmin: ${isAdmin}`);

({ name, years: age, isAdmin = false } = userV);
console.log(`${name} is ${age} y.o and is admin? ${isAdmin}`);

// ******************************************************************

/*
The maximal salary
importance: 5

There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 550
};

Create the function topSalary(salaries) that returns the name of the top-paid person.

    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.

P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

let salarii = {
    "John": 100,
    "Pete": 300,
    "Mary": 550,
    "maryJane": 550
};
//debugger;
function topSalarii(obj) {

    let max = [];
    let personaj = null;
    let salar = 0;
    
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}:${value}`);
        max = [[key], [Math.max(value)]];
    }

    if(max[1] > salar){
        console.log(max[0]);
    } else {
        console.log(personaj);
    }

}
//let personaj = null, salar = null;
({ personaj = null, salar = null } = Object.entries(objGol));
topSalarii(objGol);
({ personaj, salar } = Object.entries(salarii));
topSalarii(salarii);

// ***********************************************************************

