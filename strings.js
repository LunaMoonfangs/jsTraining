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