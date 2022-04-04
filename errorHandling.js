// Inherit from SyntaxError
// importance: 5

// Create a class FormatError that inherits from the built-in SyntaxError class.

// It should support message, name and stack properties.

// Usage example:

// let err = new FormatError("formatting error");

// alert( err.message ); // formatting error
// alert( err.name ); // FormatError
// alert( err.stack ); // stack

// alert( err instanceof FormatError ); // true
// alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)

class FormatError extends SyntaxError {
    constructor(message){
       super(message);
       this.name = "FormatError"; // sau mai corect: this.constructor.name
       //this.stack = <call stack>;
    }
}

let err = new FormatError("formating error");

console.log(`error name:` , err.name);
console.log(`error message: `, err.message);

console.log(`instanceof FormatError ?: `, err instanceof FormatError);
console.log(`instanceof SyntaxError ?: `, err instanceof SyntaxError);
