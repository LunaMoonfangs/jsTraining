//************************** functii recursive *********************
console.log(`***************** functii recursive*************`);

/*
Sum all numbers till the given one
importance: 5

Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Make 3 solution variants:

    Using a for loop.
    Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
    Using the arithmetic progression formula.

An example of the result:

function sumTo(n) { //your code }

alert( sumTo(100) ); // 5050

P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)?

*/

console.log(`Sum de n numere cu "for" loop`);

let nr = +prompt(`Introdu un numar mai mare ca 1: `);

function sumWithFor(nr){ // functia pt for loop
    let sum = 0;
        
    for(let i = 0 ; i <= nr ; i++){
        sum += i;
    }
    return sum;        
}
/*
let date1 = Date.now();
console.log(`Timp start for: ${date1}`);
*/
console.time(`sumWithFor`);

let sumaForLoop = sumWithFor(nr); // apelare functie 
// calcul de timp pt functia cu for loop

console.timeEnd(`sumWithFor`);
/*
let date2 = Date.now()-date1;
let date3 = Date.now();
console.log(`Timp stop for: ${date3}`);
console.log(`Suma cu for este: ${sumaForLoop} si a fost calculata in ${date2} ms`);
*/
function sumWithRecursion(nr) { // functia recursiva
    
    if (nr == 1) return 1;
    return nr + sumWithRecursion(nr-1);      
    
}

// calcul de timp pt functia recursiva
console.log(`******** func recursiva ************** `);

// let dateStartRecursiv = Date.now();
// console.log(`Timp start funct recursiva: ${dateStartRecursiv}`);

let sumaRecursiv = sumWithRecursion(nr);

// let timpCalcRecursiv = Date.now()-dateStartRecursiv;
// let dateStopRecursiv = Date.now();
// console.log(`Timp stop functie recursiva: ${dateStopRecursiv}`);
// console.log(`Suma cu funct recursiva este: ${sumaRecursiv} si a fost calculata in ${timpCalcRecursiv} ms`);

console.log(`************** progresie aritmetica ***********`);


function progAritm(nr) { // functia de progresie artimetica
    return (nr*(nr+1))/2;
}

let dateStartProgAritm = Date.now();
console.log(`Timp start progresie aritmetica: ${dateStartProgAritm}`);

let sumaProgAritm = progAritm(nr);  // apelare functie

// calcul de timp  pt progresie aritmetica
let timpCalcProgAritm = Date.now()-dateStartProgAritm;
let dateStopProgAritm = Date.now();
console.log(`Timp stop progresie aritmetica: ${dateStopProgAritm}`);
console.log(`Suma cu prog. aritmetica este ${sumaProgAritm} si a fost calculata in ${timpCalcProgAritm}`);

console.log(`********************** factorial ********************************`);

/*
Calculate factorial
importance: 4

The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

We can write a definition of factorial like this:

n! = n * (n - 1) * (n - 2) * ...*1

Values of factorials for different n:

1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

The task is to write a function factorial(n) that calculates n! using recursive calls.

alert( factorial(5) ); // 120

P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
*/

function factorial(nr) {
    if(nr == 1) return 1;
    return nr * (factorial(nr-1));
}

let nFactorial = factorial(nr);
console.log(`nrFactorial = ${nFactorial}`);

console.log(`*********** Fibonacci **************`);

/*
Fibonacci numbers
importance: 5

The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:

function fib(n) { // your code}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.
*/


function nrFibo(nr) {
    if(nr == 2) return 2;
    if(nr == 1) return 1;
    return nr + nrFibo(nr-1) + nrFibo(nr-2);
}

let sirFibo = nrFibo(nr);
console.log(`Suma primelor ${nr} numere din sirul Fibo este: ${sirFibo}`);

function findFibo(nr) {
    if (nr == 1) return 1;
    if (nr == 2) return 1;
    return findFibo(nr-1) + findFibo(nr-2); // ruleaza foarte mult :)
}

let FiboNr = findFibo(nr);
console.log(`Al ${nr}lea nr Fibo este: ${FiboNr}`);

// *****************************************************************************