//***************** 08.03.22 **************
console.log("******************* date.js *********************");
/*

Create a date
importance: 5

Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

Show it using alert.

*/

const dateFeb20 = new Date (2012,01,20,03,12);
console.log(`20 Feb 2021 ora 3:12 = ${dateFeb20}`);
const dateDuminica = new Date (2012,01,19,03,12);
// ******************
/* 
Show a weekday
importance: 5

Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

Open a sandbox with tests.
*/

const weekDays = ["Duminica" , "Luni" , "Marti" , "Miercuri" , "Joi" , "Vineri" , "Sambata"];
console.log(`${dateFeb20} a nimerit intr-o zi de: ${weekDays[dateFeb20.getUTCDay()]}`);

//*****************************
/*
European weekday
importance: 5

European countries have days of week starting with Monday (number 1), 
then Tuesday (number 2) and till Sunday (number 7). 
Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2

Open a sandbox with tests.
*/

function getLocalDay(date){
    let localDay = date.getDay();
    if(localDay === 0){
        localDay = 7;   
    }
    console.log(`In Europa, ${weekDays[date.getUTCDay()]} e socotita ca ziua: ${localDay} :) `);
}


getLocalDay(dateFeb20);
getLocalDay(dateDuminica);

// *********************************

/*
Which day of month was many days ago?
importance: 4

Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

P.S. The function should not modify the given date.

Open a sandbox with tests.
*/

function getDateAgo(date, days){
// date = din ce data incepe sa numere
// days = a cata zi din luna o sa nimereasca

// citeste data 


let dataFinala = new Date(date);
dataFinala.setDate(dataFinala.getDate() + days);
let ziua = dataFinala.getDate();

console.log(`Diferenta de ${days} zile de la data de ${date}, nimereste in ziua:${ziua} , si este data de: ${dataFinala}`);
// calculeaza 
console.log(`Data este: ${date}`);

}

const date = new Date(2022, 1, 25);
console.log(`inainte de functie: ${date}`);
getDateAgo(date, -1);
getDateAgo(date, -28);