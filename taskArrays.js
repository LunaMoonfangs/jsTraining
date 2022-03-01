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
class Calculator{
    nr1;
    nr2;
    str;
    operator;
    
    read() {
        this.str = prompt("Introdu un string: ");
        this.nr1 = Number(this.str.split(' ')[0]); //split returneaza un array
        this.operator = this.str.split(' ')[1];
        this.nr2 = Number(this.str.split(' ')[2]);
    }
    
    method = {
        '+' : (a,b) => {return a + b},
        '-' : (a,b) => {return a - b}
    };

    
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

    calculate(){
        return this.method[this.operator](this.nr1,this.nr2);
    }
    
    // calculate dinamic 

    calculateDinamic(){
        return eval(this.str);
    }

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

newCalc.read();

console.log(`Rezultatul este ${newCalc.calculate()}`);

console.log(`Rezultatul la calculatorDinamic este: ${newCalc.calculateDinamic()}`);