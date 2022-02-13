// **************** 13.02.2022 **************
/*

Repeat until the input is a number
importance: 5

Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

Run the demo

Open a sandbox with tests.

*/
/*
function readNumber (){
   let numar;

   do{
    numar = prompt('Introdu un numar: ', NaN);
   } while ( !isFinite(numar));

   if ( (numar === null) || numar === " " ){
       return null;
   } else 
   return +numar;
}

alert(`Numarul este: ${readNumber()} `);
*/

// ***********************************************

/*
A random number from min to max
importance: 2

The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525

***************************************************

A random integer from min to max
importance: 2

Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

Any number from the interval min..max must appear with the same probability.

Examples of its work:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5

You can use the solution of the previous task as the base.

*/

function random(min, max) {
    //return Math.abs( (max * Math.random()) - (min * Math.random()) );
    return (min + Math.random() * (max - min));
    // return Math.floor (min + Math.random() * (max-min));            // pt randomInteger
}

alert(random(1, 50)); // 1.2345623452
alert(random(1, 50)); // 3.7894332423
alert(random(1, 50)); // 4.3435234525

