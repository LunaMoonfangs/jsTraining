// Constructor function
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
    return this.dob.getBirthYear;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
*/
// Class
/*
class Person {
   constructor  (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
   }

   getBirthYear() {
       return this.dob.getUTCFullYear();
   }

   getFullName () {
       return `${this.firstName} ${this.lastName}`;
   }
}


// Instantiate object

const person1 = new Person('John', 'Doe', '4/3/1981');
const person2 = new Person('Mary', 'Doe', '2/3/1990');



console.log(person1.getFullName() + 'was born in ' + person1.dob.getFullYear());
console.log(person2.getFullName() + ' was born in ' + person2.dob.getFullYear());
*/

// ******************* Logical ***************

/* Write the code which asks for a login with PROMPT.

If the visitor enters "ADMIN", then prompt for a password. 
If the imput is an empty line or ESC key : show "CANCELED"
if it`s another string - then show "I don`t know you"
*/
/*
let user = prompt('Who are you ?');
let password;

if ( (user === '') || (user === null)){
    alert('Canceled');
} else if( user === 'Admin'){
    password = prompt("Please enter the passoword: ");
    if(password == "TheMaster"){
        alert('Welcome!');
    } else if(password === '' || password === null){
        alert('Canceled'); 
    } else {
        alert ('Password incorrect');
    }
} else {
    alert ('I don`t know you!');
}

*/

/* 

Write the code using if..else which would correspond to the following switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/
/*
let browser = prompt("What browser you have ?");

if (browser === 'Edge'){
    alert( "You've got the Edge!" );
} else if ((browser === 'Chrome') || (browser === 'Safari') || (browser === "Opera"))  {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
*/

/* 

Rewrite the code below using a single switch statement:

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

*/
/*
let a = +prompt('a?', '');

switch (a){
    case 0:
        alert(0);
        break;
    case 1:
        alert (1);
        break;
    case (2 || 3):
        alert('2,3');
        break;
    default:
        alert("nici una din variante.");
}
*/

