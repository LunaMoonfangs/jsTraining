// ********************* Tasks Arrays *******************

/*
Translate border-left-width to borderLeftWidth
importance: 5

Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

P.S. Hint: use split to split the string into an array, transform it and join back.

Open a sandbox with tests.
*/
/*
function camelize(str) {
    let camel = [];

    camel = str.split('-');
    //alert(camel);
    camel = camel.map((word, index) => {
          index == 0 ? word : word[0].toUpperCase() + word.slice(1) } );
        alert(camel);
      /*  
        let temp = [...word];
        temp = temp.join('');
        if (index == 0) {
            return word;
        } else {
            temp[0] = temp[0].toUpperCase();
            //return word[0].toUpperCase() + word.slice(1);
            return temp;
        }
    });
    *//*
camel = camel.join('');
return camel;
}

alert(camelize("asd-dsa-red-a"));
alert(camelize("background-color"));
*/
// ok 

// *********** explicatii map si forEach 
/*
let a = 'back-gro----und-color';

    let b = a.map((elm,i) => {
        return elm + 1;

        //console.log(`elementul curent este ${elm} si este pe pozitia ${i}`);
        
    } )*/
/*
 let b = [];
 let pozitii = [];
 
 for( let i in a){
    if( a[i] != '-' ) {
       b.push(a[i]);
    } else {
      if( !pozitii.includes(i) ){  
        pozitii.push(i-pozitii.length);
      }
    }
}

for(let elm of pozitii){
    b[elm] = b[elm].toUpperCase();
}
b = b.join('');
console.log(b);
console.log(pozitii);
*/

// remake numai cu string !
/*
// schimbare cu functie de lower sau upper case
function camelize(str) {
    
    let camel = '';
    let temp = '';
    let up = '';
    
    for (let char of str) {
        if (char != '-') {
            temp = temp + char;            
        } else {
            /*
            up = temp[0].toUpperCase();
            temp = temp.slice(1);
            camel = camel + up + temp;
            */ /*
camel = camel + toUp(temp,true);
temp = '';
}
}
/*
up = temp[0].toUpperCase();
temp = temp.slice(1);
camel = camel + up + temp;
*/ /*
camel = camel + toUp(temp,true);
/*
up = camel[0].toLowerCase();
temp = camel.slice(1);
camel = up + temp;
*/ /*
    camel = toUp(camel,false);
    alert(`Stringul camelize este: ${camel}`);
}
// ****** use function 
function toUp(str,boolean) {
    if(boolean){
    return str[0].toUpperCase() + str.slice(1);
    } else {
    return  str[0].toLowerCase() + str.slice(1);
    }
    
}

camelize("a-sd-dsa-red-a");
camelize("back-ground-color");

*/

// ************************************************

/*

Sort in decreasing order
importance: 4

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

alert( arr ); // 8, 5, 2, 1, -10




let arr = [5, 2, 1, -10, 8];


arr.sort(function(a, b) {
    return b - a; });

alert(arr); */

// **********************************************

/*
Copy and sort array
importance: 5

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*//*

let arr = ["HTML", "JavaScript", "CSS","test", "aaaa"];

let sorted = copySorted(arr);

function copySorted(arr){
    //let cpy = arr.slice(0);
    let cpy = [...arr];

    for (let elm of cpy){
        cpy = cpy.sort((a,b)=> a-b);
    }
  return cpy;
}

alert(`${arr} sortat este:  ${sorted}` );

*/
// ok

// ************************************************
/*
Filter range
importance: 4

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements
with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

Open a sandbox with tests.*//*

let arr = [5, 3, 8, 1];

function filterRange(arr, min , max){
    return arr.filter( (item) => // (item < max) && (item > min)
    {
        if( (item < max) && (item > min)){
            return true;
        } else {
            return false;
        }
    } );

}

console.log("arr= " , arr);
console.log('filtru= ' , filterRange(arr,1,4));
*/

// ***************** spread operator ****************************
/*
let ceva = {
    a : 'a',
    b : 'b',
    c : 'ceva',
    d : "e",
    e : 'tz'
};

//let {b} = ceva ; // == let b = ceva.b;
// let {a,b} = ceva; // == let a = ceva.a ; let b = ceva.b;

let {a,b,...rest} = ceva;
console.log(rest);  // == { c : 'ceva', d: 'e', e:'tz' }
*/


// ************** 01.03.22 *******************

/*
Create an extendable calculator
importance: 5

Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

    First, implement the method calculate(str) that takes a string like "1 + 2" 
    in the format “NUMBER operator NUMBER” (space-delimited) and returns the result.
     Should understand plus + and minus -.

    Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) that teaches the calculator a new operation. 
It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8

    No parentheses or complex expressions in this task.
    The numbers and the operator are delimited with exactly one space.
    There may be error handling if you’d like to add it.

*/

/*
function Calculator() {
    this.nr1;
    this.nr2;
    this.str;
    this.operator;
    this.read = function () {
        this.str = prompt("Introdu un string: ");
    
    
    }
    
    this.calculate = function (str) {
        // iteratie peste string ca sa gasesc " "
        let temp = '';
        let index = -1;
        index = str.indexOf(' ');
        alert(`Index este: ${index}`);
        // cauta primul numar 
        if (index !== -1) {
            for (let i = 0; i < index; i++) {
                temp = temp + str[i];
            }
            alert(`Temp este: ${temp}`);
            this.nr1 = Number(temp);
            alert(`nr1 este: ${this.nr1}`);
        }    
        debugger;
        temp = '';
        // cauta al 2lea nr    
        index = str.lastIndexOf(' ');
        alert(`Index este: ${index} in string ${str}`);
        if (index !== -1) {       
            for (let j = index; j < str.length ; j++) {
                temp = temp + str[j];
            }
            alert(`Temp este: ${temp}`);            
            this.nr2 = Number(temp);
            alert(`nr2 este: ${this.nr2}`);   
        }
        // verirfica operatorul si calculeaza

        if (str.includes('+')) {
            this.suma = this.nr1 + this.nr2;
            return this.suma;
        } else {
            this.suma = this.nr1 - this.nr2;
            return this.suma;
        }
    }

    return this.suma;

}

let calc = new Calculator;
calc.read();
alert(calc.calculate(calc.str));

*/

// schimbat din function in class
/*
class Calculator{
    nr1;
    nr2;
    str;
    operator;
    
    read() {
        const str = prompt("Introdu un string: "); 
        const arr = str.split(" ");
        /*

        this.nr1 = Number(this.str.split(' ')[0]); //split returneaza un array
        this.operator = this.str.split(' ')[1];
        this.nr2 = Number(this.str.split(' ')[2]);*/
/*
        this.nr1 = arr[0];
        this.operator = arr[1];
        this.nr2 = arr[2];
    }
    
    method = {
        '+' : (a,b) => {return a + b},
        '-' : (a,b) => {return a - b}
    };
*/
    
/*
    calculate(str) {
        // iteratie peste string ca sa gasesc " "
        let temp = '';
        let index = -1;
        index = str.indexOf(' ');
        //alert(`Index este: ${index}`);
        // cauta primul numar 
        if (index !== -1) {
            for (let i = 0; i < index; i++) {
                temp = temp + str[i];
            }
            //alert(`Temp este: ${temp}`);
            this.nr1 = Number(temp);
            //alert(`nr1 este: ${this.nr1}`);
        }    
        //debugger;
        temp = '';
        // cauta al 2lea nr    
        index = str.lastIndexOf(' ');
        //alert(`Index este: ${index} in string ${str}`);
        if (index !== -1) {       
            for (let j = index; j < str.length ; j++) {
                temp = temp + str[j];
            }
            //alert(`Temp este: ${temp}`);            
            this.nr2 = Number(temp);
            //alert(`nr2 este: ${this.nr2}`);   
        }
        // verirfica operatorul si calculeaza

        if (str.includes(' + ')) {
            this.operator = this.nr1 + this.nr2;
            return this.operator;
        } else {
            this.operator = this.nr1 - this.nr2;
            return this.operator;
        }    
    }*/
/*
    calculate(){
        return this.method[this.operator](this.nr1,this.nr2);
    }
*/  
    // calculate dinamic 
/*
    calculateDinamic(){
        return eval(this.str); // nu se foloseste
    }
*/
/*
}

let calc = new Calculator;


class pwrCalculator extends Calculator{
    addMethod(newOperator,operatie){
        this.method[newOperator] = operatie;  
    }
}

let newCalc = new pwrCalculator;
newCalc.addMethod('*', (a,b) => {return a * b} ); // adaug functia de inmultire
newCalc.addMethod('/', (a,b) => {return a / b} );
newCalc.addMethod('**', (a,b) => {return a ** b} );

*/
// ****************************

/* Exemplu concret:

(2+47)*2-(3+2)**2

r1 = 2+47;
r2 = r1*2;
r3 = 3+2;
r4 = r3**2;
rf=r2-r4; 

//newCalc('-', (r2,r4))
//newCalc('-', (newCalc('*',(r1,2)),r4))
//newCalc('-', (newCalc('*',(newCalc('+', (2,47)),2)),r4))
//newCalc('-', (newCalc('*',(newCalc('+', (2,47)),2)),newCalc('**', (r3,2))))

newCalc('-', (newCalc('*',(newCalc('+', (2,47)),2)),newCalc('**', (newCalc('+',(3,2)),2))))
*/
/*
newCalc.read();

console.log(`Rezultatul este ${newCalc.calculate()}`);

console.log(`Rezultatul la calculatorDinamic este: ${newCalc.calculateDinamic()}`);
*/


// ******************** 02.03.22 *******************


/*
Map to names
importance: 5

You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = // ... your code 

alert( names ); // John, Pete, Mary

// ***** my code :)

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map( item => item.name);

console.log(`Numele userilor sunt: ${names}`);
*/

// **************************

/* Map to objects
importance: 5

You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, 
where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*//*

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith

So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
*/

let john = { name: "John", surname: "Smith", id: 1, age: 28 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 35 };
let mary = { name: "Mary", surname: "Jane", id: 3, age: 23 };
let cpyMary = { name: "Mary", surname: "Jane", id: 4, age: 23 };

let users = [ john, pete, mary , cpyMary];

let usersMapped = users.map( item => ({ //daca foloseam {} era considerata functie, trebuie folosit ({ }) ca sa fie object 
    fullName: `${item.name}  ${item.surname}`,
    id: item.id
  }) );

for(let key of usersMapped){   
    //console.log(`UsersMapped ID este: `);
    console.log(`Numele complet al userului ${key.id} este ${key.fullName}`);
}

// *****************************************************
/*
Sort users by age
importance: 5

Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

*/

let usersAge = users.map( item => ({ //daca foloseam {} era considerata functie, trebuie folosit ({ }) ca sa fie object 
    name: item.name,
    age: item.age
  }) );

  for(let key of usersAge){   
    console.log(`Varsta lui ${key.name} este: ${key.age}`);
  }  

  function sortByAge(arr) {   
        let cpy = arr.sort ((a,b) => a.age - b.age ); 
        return cpy;
  }
console.log(`Sortare dupa varsta: `);
console.log(sortByAge(usersAge)); // merge :)

/*
Shuffle an array
importance: 3

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

All element orders should have an equal probability. For instance, [1,2,3] can be reordered as 
[1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

let randArr = [0,1,2,3,5];

function suffleArr(arr){
    let index = Math.floor(Math.random() * arr.length);
    let suffArr = [];
    let cpy = [];
    // o copie pt a nu modifica randArr 
    for (let elm of arr){
    cpy.push(elm);
    }
    while( cpy.length) {
        // random index
        index = Math.floor(Math.random() * cpy.length );
        
        //push valoarea din cpy[index]
        suffArr.push(cpy[index]);
        
        //eliminat din cpy
        cpy.splice(index,1);
               
    }

    return suffArr;

}


for(let i = 0; i < 6 ; i++){
console.log(`${suffleArr(randArr)} este random array rezultat din ${randArr} `);
}



// *************************

/* 

Get average age
importance: 4

Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

*/

function getAverageAge(arr){
    let suma = 0;
    let average = NaN;
    
    for(let elm of arr){
        //console.log(elm.age);
        suma += elm.age;
    }
    //console.log(`suma= ${suma}`);

// in solution la ei au folosit:
// function getAverageAge(users) {
// return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//}
   
    return average = suma / arr.length;
}

console.log(`Media de varsa este: ` + getAverageAge(usersAge));

// ***************** 03.03.22 ************

/*
Filter unique array members
importance: 4

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  // your code 
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

// ******

function unique(arr) {
    let compare = [];
    for(let elm of arr){
        if( !compare.includes(elm)){
           compare.push(elm);     
        }
    }
    console.log(`unique str este: ${compare}`)
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(strings);  // Hare, Krishna, :-O

}

*/

// ****************************

/*
Create keyed object from array
importance: 4

Let’s say we received an array of users in the form 
{id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, 
with id as the key, and array items as values.

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}


Such function is really handy when working with server data.

In this task we assume that id is unique. 
There may be no two array items with the same id.

Please use array .reduce method in the solution.

*/
debugger;
console.log(`Array de useri este: `);
console.log(users);

function groupById(arr) {
    
// https://youtu.be/kC3AasLEuBA?t=739
// spread operator pt a copia tot obj din arr[]
//[persoana.id] in [] pentru a lua valoarea din arr.id
// : persoana pentru ca valoarea obj sa fie intreg obj din arr[]
   let arrObj = arr.reduce( function( acc, persoana ) { 
       return {...acc , [persoana.id] : persoana }
   }, {}); 
// {} din "}, {} ); " este ca valoarea initiala pt persoana sa fie un obj gol 
   return arrObj; 
}


let usersById = groupById(users);
console.log('*** Obiectul grupat dupa ID este: ');
console.log(usersById);