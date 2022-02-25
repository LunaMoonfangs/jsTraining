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