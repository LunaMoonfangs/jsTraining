// **************** advance working with functions *********************

/* ************* Sum with closure

Sum with closures
importance: 4

Write function sum that works like this: sum(a)(b) = a+b.

Yes, exactly this way, using double parentheses (not a mistype).

For instance:

sum(1)(2) = 3
sum(5)(-1) = 4

*/
//debugger;
function sumCu2Param(nr1) {

  // returnez o functie care sa foloseasca nr2 ca parametru
  //let sum = 0;
  return function (nr2) {
    console.log(`Suma dintre ${nr1} si ${nr2}:`);
    //  sum = nr1 + nr2;
    //  return sum;
    return nr1 + nr2;
  }

}

console.log(sumCu2Param(1)(2)); // = function(2) + sumCu2Param(1) 
console.log(sumCu2Param(1)(4));

// *****************************************



// Filter through function
// importance: 5

// We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. 
// If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

//     inBetween(a, b) – between a and b or equal to them (inclusively).
//     inArray([...]) – in the given array.

// The usage must be like this:

//     arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
//     arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].

// For instance:

// /* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7, 0];

console.log(`inBetween final: `, arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(`inArray final:`, arr.filter(inArray([1, 2, 10, 5, 2, 0]))); // 1,2

// Open a sandbox with tests.

function inArray(arr) {

  // inArray trebuie sa returneze functia care face conditia pt filter

  return function (item) {

    // daca item se gaseste in interiorul lui arr => return item
    if (arr.includes(item)) {
      console.log(`inArray item: ${item}`);
      return true; // deoarece includes returneaza TRUE/FALSE daca gaseste sau nu item
    }
  };

}

function inBetween(nr1, nr2) {
  // inBetween trebuie sa returneze functia care face conditia pt filter
  return function (item) {
    return (item >= nr1) && (item <= nr2);
  }
}

// ************* function name NFE ************************
console.log(`****************** NFE ***************`);
/*
Tasks
Set and decrease for counter
importance: 5

Modify the code of makeCounter() so that the counter can also decrease and set the number:

    counter() should return the next number (as before).
    counter.set(value) should set the counter to value.
    counter.decrease() should decrease the counter by 1.

See the sandbox code for the complete usage example.

P.S. You can use either a closure or the function property to keep the current count. Or write both variants.

Open a sandbox with tests.

*/

console.log(` ************ Counter increase, decrease si set value: *****************`);

function makeCounter() {
  // let count aici ca sa fie in makeCounter Enviroment
  let count = 0;

  function counter() {
    return ++count;
  };
  // set si decrease sunt functii in Enviromentul lui counter 
  // dar pot sa acceseze si count care e local
  counter.set = function(value) {
    count = value;
    return count;
  };

  counter.decrease = function() {
    return --count;
  };

  console.log(`count este: ` , count);
  return counter;
}

let counter = makeCounter();
console.log(`Counter(): ` , counter()); // 0
console.log(`Counter(): ` , counter()); // 1
console.log(`Counter.set(10): ` , counter.set(10));
console.log(`Counter.decrease(): ` , counter.decrease());


// *****************************************************

// Sum with an arbitrary amount of brackets
// importance: 2

// Write function sum that would work like this:

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

// P.S. Hint: you may need to setup custom object to primitive conversion for your function.

function sumWithArbitrary (nr1) { 
  // imi trebuie o variabila care sa pastreze suma intermediara:
  let result = nr1;
  
  // pt ca functia sa accepte si de parametri => trebuie sa am un la return o functie
  let suma = function (nr){
    result = result + nr;
    console.log(`result: ` , result);
    return suma;
  }
  // pt ca urmatoarea functie sa primeasca un numar ca argument => trebuie sa returnez rezultatul
  // m-am luat dupa HINT si (am transformat "result" in string) si am transformat (string) in Number
  // MDN number to string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  // MDN object to string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString 
  
  Number(suma.toString = function() {
    return result; 
  });

  console.log(`typeof suma: `, typeof(suma)); // typeof suma:  function 
  //return o functie:
  return suma;
  // daca tin deasupra de suma, imi apare ca ii obj ?? de ce ?
  

}

console.log(`sumWithArbitrary(1)(2)(3)` , sumWithArbitrary(1)(2)(3));
console.log(`sumWithArbitrary(1)(2)(3)(-5)(0)(11)` , sumWithArbitrary(1)(2)(3)(-5)(0)(11));

// ***********************************************

