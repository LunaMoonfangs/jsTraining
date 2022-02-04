
let a = "" + 1 + 0 // = "10" // (1)
let b = "" - 1 + 0 // = -1 // (2)
let c = true + false // = 1
let d = 6 / "3" //= 2;
let e = "2" * "3" //= 6;
let  f = 4 + 5 + "px" //= "9px"
let g= "$" + 4 + 5 //= "$45"
let h = "4" - 2 //= 2
let i = "4px" - 2 //= NaN
let j = "  -9  " + 5 //= "  -9  5" // (3)
let k = "  -9  " - 5 //= -14 // (4)
let l = null + 1 //= 1 // (5)
let m = undefined + 1 //= NaN // (6)
let n = " \t \n" - 2 //= -2 // (7)

/* 


    (1) The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
    (2) The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
    (3) The addition with a string appends the number 5 to the string.
    (4) The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
    (5) null becomes 0 after the numeric conversion.
    (6) undefined becomes NaN after the numeric conversion.
    (7) Space characters, are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.

    */

    console.log('a= ' + a + ' si este ',typeof a);
    console.log('b= ' + b + ' si este ',typeof b);
    console.log('c= ' + c + ' si este ',typeof c);
    console.log('d= ' + d + ' si este ',typeof d);
    console.log('e= ' + e + ' si este ',typeof e);
    console.log('f= ' + f + ' si este ',typeof f);
    console.log('g= ' + g + ' si este ',typeof g);
    console.log('h= ' + h + ' si este ',typeof h);
    console.log('i= ' + i + ' si este ',typeof i);
    console.log('j= ' + j + ' si este ',typeof j);
    console.log('k= ' + k + ' si este ',typeof k);
    console.log('l= ' + l + ' si este ',typeof l);
    console.log('m= ' + m + ' si este ',typeof m);
    console.log('n= ' + n + ' si este ',typeof n);


