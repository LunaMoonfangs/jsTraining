/* Uppercase the first character
importance: 5

Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";




function ucFirst(str){
    let upStr = str[0].toUpperCase() + str.slice(1);  
// aici merge mai bine str.charAt(0) in loc de str[0] deoarece empty string = undefined
    return upStr;    
}

alert(ucFirst('msadasda0'));
alert(ucFirst('john'));
alert(ucFirst('asdadsad'));
alert(ucFirst('k;ljOSO'));

*/

// *************************************

/* 
Check for spam
importance: 5

Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
/*
function checkSpam(str){
    let checkStr = str.toUpperCase();

    if ( checkStr.includes("VIAGRA") || (checkStr.includes("XXX")) ){
        return true;
    } else {
        return false; 
    }  
}

alert(checkSpam('buy ViAgRA now')) ;
alert(checkSpam('free xxxxx')) ;
alert(checkSpam("innocent rabbit")) ;
*/

// ********************** 20.02.22 ********************

/* Truncate the text
importance: 5

Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength 
– replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

Open a sandbox with tests.

*/
/*
function truncate (str, maxlength){
    let lungime = str.length - maxlength;
    if( lungime > 0){
       let truncStr = str.slice(0,maxlength-1) + '…'
       alert (truncStr);       
    } else 
    alert(str);    
}

let text = prompt('Introduceti un text: ');
let nrChars = prompt('Cat de lung sa fie textul? ');

if( nrChars > 3 ){
    truncate(text,nrChars); 
}

//********** aceasi functie cu ternary **********

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
  }

let text = prompt('Introduceti un text: ');
let nrChars = prompt('Cat de lung sa fie textul? ');

if( nrChars > 3 ){
    alert(truncate(text,nrChars));
}

*/
// *******************************************************
/*

Extract the money
importance: 4

We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

The example:

alert( extractCurrencyValue('$120') === 120 ); // true

Open a sandbox with tests.


function extractCurrencyValue(str){
    let value = Number(str.slice(1));
    return value;
}
alert( extractCurrencyValue('$120') === 120 );

*/
