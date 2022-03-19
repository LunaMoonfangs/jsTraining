// **************** advance working with functions *********************

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

debugger;
function makeCounter() {
    let count = 0;
  
    function counter() {
      return counter.count++;
    };
  
    counter.count = 0;
    console.log(counter.count);
    return counter;
}
  
let counter = makeCounter();
  console.log( counter() ); // 0
  console.log( counter() ); // 1




// let sayHi = function func(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       func("Guest"); // Now all fine
//     }
// };