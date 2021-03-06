/*    
// ************************ week 2 ( 4 - 11.02) ***********************************
Create new Calculator
importance: 5

Create a constructor function Calculator that creates objects with 3 methods:

    read() asks for two values using prompt and remembers them in object properties.
    sum() returns the sum of these properties.
    mul() returns the multiplication product of these properties.

For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/

/*
let calculator = {
    // ... your code ... 
    nr1 : 0,
    nr2 : 0,
  
    read () {
      this.nr1 = Number( prompt(`Primul nr= `, this.nr1) );
      this.nr2 = Number( prompt(`Al 2lea nr=  `, this.nr2) );      
      return this.nr1,this.nr2;
    },
  
    sum(){
      return this.nr1+this.nr2;
    },
  
    mul() {
      return this.nr1 * this.nr2;
    }
  
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  // *************************************

  */
/*
function Calculator (){

    this.nr1 = 0 ;
    this.nr2 = 0 ;
   

    this.read = function () {
      this.nr1 = Number( prompt(`Primul nr= `, this.nr1) );
      this.nr2 = Number( prompt(`Al 2lea nr=  `, this.nr2) ); 
    };

    this.sum = function () {
        return this.nr1 + this.nr2 ;
        
    };

    this.mul = function() {
        return this.nr1 * this.nr2 ;
    };
}

let calculator = new Calculator();
calculator.read();

  alert( `Suma dintre ${calculator.nr1} si ${calculator.nr2} este ` + calculator.sum() );
  alert( `Produsul dintre ${calculator.nr1} si ${calculator.nr2} este ` + calculator.mul() );

*/

// ****************************************************

/*
Create new Accumulator
importance: 5

Create a constructor function Accumulator(startingValue).

Object that it creates should:

    Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
    The read() method should use prompt to read a new number and add it to value.

In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

*/

/*
function Accumulator (startingValue){

  this.value = startingValue;

  this.read = function () {
    this.value += Number( prompt(`Suma este ${this.value}, mai adaugi ? `, this.startingValue) );
  }
  
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();
accumulator.read();
accumulator.read();
alert(accumulator.value);

*/

// ***************** 17.02.22 ***********************
/*
let a = {
  nume: 'Ion',
  prenume: 'Popa',
  schimb: function (newNume) {
    this.nume = newNume;
  }
};

let b = Object.create(a);

b.nume = 'Vasilika';

class Persoana {
  #nume;  // daca folosesc #nume  nu o sa poata fi modificat prin simplu .nume = ' ' >> trebuie folosit un setter
  prenume;
 
  // contructor
  constructor(numeInitial, prenumeInitial) {
    this.#nume = numeInitial;
    this.prenume = prenumeInitial;
  }

  cumMaCheama() {
    console.log(this.#nume);
  }

  schimb(newNume) {
    this.#nume = newNume;
  }

  get numeComplet(){    // getter
    console.log(this.#nume + ' ' +  this.prenume);
  }

  set numeComplet(numeSet){ // setter
    this.#nume = numeSet.split(' ')[0];
    this.prenume = numeSet.split(' ')[1];
    console.log('s-a facut schimbarea, ca sa fiu funny :)')
  }

}

let ceva = new Persoana('Numele_pe_care_il_vrem_initial', 'Prenume_initial');

class Programator extends Persoana {
  limbaje;

  constructor(numeInitial, prenumeInitial, limbajeInitial) {
    super(numeInitial, prenumeInitial);   // apeleaza constructorul din Persoana
    this.limbaje = limbajeInitial;  
  }

}

let cinevaProgramator = new Programator('Numele_pe_care_il_vrem_initial', 'Prenume_initial', 'jS');
cinevaProgramator.schimb('John');

*/

// ************* 01.03.2022 **************
/*
class Masina {
  marca ;
  motor ;
  nrRoti = 4;

  constructor(marca,motor){
    this.marca = marca ;
    this.motor = motor;
  }

  prezentare() {
    console.log(`Masina e ${this.marca} , are motor de ${this.motor} si are ${this.nrRoti} roti`);
  }
  
}

class Bicicleta extends Masina {
  nrRoti = 2;
  // are si marca 
  // are si motor (preluate de la class Masina)
}



let furiaRoha = new Masina("mercedes", 2000);
furiaRoha.prezentare();

let tohan = new Bicicleta('Tohan', null);

tohan.prezentare();

// obj literal
*//*
function Masina2(marca, motor) {
  this.nrRoti = 4;
  this.marca = marca;
  this.motor = motor;

  this.prezentare = function() {
    console.log(`Masina e ${this.marca} , are motor de ${this.motor} si are ${this.nrRoti} roti`);
  }
}

let furiaRoha2 = new Masina2("Dacia", 2000);
furiaRoha2.prezentare();

let tohan2 = Object.create( new Masina2('Tohan', null));

//let tohan2 = new Bicicleta2('Tohan',null);
tohan2.nrRoti = 2;
debugger;
tohan2.prezentare();

*/
/*
const o = {
  a: 2,
  m: function() {
    return this.a + 1;
  }
};

console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

const p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // assign the value 4 to the property 'a' on p
console.log(p.m()); // 5
// when p.m is called, 'this' refers to p.
// So when p inherits the function m of o,
// 'this.a' means p.a, the property 'a' of p
*/