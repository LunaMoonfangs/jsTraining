'use strict';
/* ************* Loops 

Rewrite the code changing the for loop to 
while 
without altering its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

// *******

let i =0 ;

while (i < 3) {
    alert( `number ${i}!` );
    i++;
}
*/
/*

Repeat until the input is correct
importance: 5

Write a loop which prompts for a number greater than 100. 
If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor 
enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. 
There’s no need to implement a special handling for a non-numeric 
input in this task.

*/
/*
let numar = Number(prompt('Introdu un numar mai mare ca 100'));

if(numar >= 100){
        alert('Bravo');
} else {
    do {
        numar = Number(prompt('Introdu un numar mai mare ca 100')); 
    } while( (numar <= 100)  || ( numar === '') || (numar === null));
}
*/

// **************** Output prime numbers *******************

/*
let numar = prompt ('Pana unde verificam primele: ');
let nrPrim = 2;
if(numar < nrPrim){
    alert('introdu alt numar');
} else {

while (nrPrim <= numar){
    let i=2;
    while(i<=nrPrim){

        if(nrPrim % i != 0){
        alert('Numarul ' + nrPrim + ' este numar prim');
        i++;            
        } else {
            i++;
            //console.log('Numarul ' + nrPrim + ' este prim');
        }   
    }   
 nrPrim++;   
}
}*/