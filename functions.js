'use strict';

/* 
// ***********************************************
Rewrite the function using '?' or '||'
importance: 4

The following function returns true if the parameter age is greater than 18.

Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

Rewrite it, to perform the same, but without if, in a single line.

Make two variants of checkAge:

    Using a question mark operator ?
    Using OR ||

// ***********************************************

function checkAge(age) {
    //return age > 18 ? true : confirm('Did parents allow you?');
    return (age > 18) || (confirm('Did parents allow you?'));
}

let age = prompt('Cati ani ai ?');
alert(checkAge(age));

*/

// ************************************************

/*
 ************* Function min(a, b)  ****************
importance: 1

Write a function min(a,b) which returns the least of two numbers a and b.


function checkMin(a,b){
    return a<b ? alert(a) : alert(b);
}

checkMin(2,5);
checkMin(222,4444);
checkMin(2312,98);

*/

/* 

Function pow(x,n)
importance: 4

Write a function pow(x,n) that returns x in power n. 
Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1

Create a web-page that prompts for x and n, 
and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function 
should support only natural values of n: integers up from 1.
*/

// **************************************
/*
function calcPow(x,n){
    let y=x;
    for(let i=2; i<=n;i++){
        y = x*y;
    }
    return alert(y);    
}
let x = prompt ('Dati un numar: ');
let n = prompt('Introdu gradul: ');

if (n < 1){
    alert("N trebuie sa fie mai mare ca 1");
} else {
calcPow(x,n);
}
*/

// *****************************************

/* 

Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

*/
/*
function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else
    no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
*/

// ********************************************




