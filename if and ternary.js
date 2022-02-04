'use strict';

/* Using the if..else construct, write the code which asks: 
‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, 
then output “Right!”, otherwise – output: 
“You don’t know? ECMAScript!”*/

//let answer = prompt('What is the official name of JS?', null);
/*
if (answer === 'ECMAScript'){
    alert('Ai raspuns corect.');
}
else {
    alert('Ai gresit');
}
*/

//answer === 'ECMAScript' ? alert('corect') : alert("ai gresit");

/* Using if..else, write the code which gets a number via prompt 
and then shows in alert:

    1, if the value is greater than zero,
    -1, if less than zero,
    0, if equals zero.

In this task we assume that the input is always a number.
*/ 
/*
let numar = Number(prompt('Cat este numarul ?', NaN));

if (numar > 0 ){
    alert(1);
} else if (numar < 0 ){
    alert(-1);
} else if (numar == 0){
    alert(0);
}
*/

/* ******************************** 
Rewrite this if using the conditional operator '?': 

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}



let result;
(numar < 4) ? result = 'Below' : result = 'Over';

*/


/* *******************************************
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}



let message;
let login = answer;

(login == 'Employee') ? message = 'Hello' : 
(login == 'Director' ) ? message = 'Greetings' :
(login == '') ?  message = 'No Login' : message = 'EMPTY' ;

alert(message);

*/

/* ****************************************************



*/