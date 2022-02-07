// ************************************************

//              Objects 

/*
Hello, object
importance: 5

Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object 


let user = {};
user.name = "John";
//console.log(user);
user.surName = "Smith";
//console.log(user);
user.name = 'Pete';
//console.log(user);
delete user.name ;
//console.log(user);

*/

// *********************************

/* 
Check for emptiness
importance: 5

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

Open a sandbox with tests.
*/

/*
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
*/

/*
Sum object properties
importance: 5

We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Marry: "unemployed"
}
let sum = 0;

for (let key in salaries) {
    if( Number(salaries[key]) ) {
        sum += salaries[key];
    }    
    
}

alert(`Suma salariilor este: ${sum}` );

*/
// **************************************************

/* 
Multiply numeric property values by 2
importance: 3

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.

Open a sandbox with tests.
*/
/*
for ( let key in salaries) {
    if( Number(salaries[key]) ){
        salaries[key] *= 2;
        alert(`Salariul dublat acum pt ${key} este: ${salaries[key]}`);
    }
}

//alert(`Salariile dublate sunt acum ${salaries}`);
console.log('Salariile dublate sunt acum : ', salaries);

*/

// ************************************** Methods **************************************

/*

Using "this" in object literal
importance: 5

Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

*/
/*
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?    == undefined

*/
function makeUser() {
    return {          
    name: "John",
      ref() {
        return this;
      } 
    }  
}

let user = makeUser();

alert( user.ref().name );