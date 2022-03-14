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

console.log(`Diferenta de ${days} zile de la data de ${date}, 
nimereste in ziua:${ziua} a lunii, si este data de: ${dataFinala}`);
// calculeaza 
//console.log(`Data este: ${date}`);

}

const date = new Date(2022, 1, 25);
//console.log(`inainte de functie: ${date}`);
getDateAgo(date, -1);
getDateAgo(date, -28);
getDateAgo(date, 365);

// ***************************************************

/*
Last day of month?
importance: 5

Write a function getLastDayOfMonth(year, month) that returns the last day of month. 
Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

    year – four-digits year, for instance 2012.
    month – month, from 0 to 11.

For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

Open a sandbox with tests.
*/
console.log('*******************Last day of mounth **************');

function getLastDayOfMonth(year,month) {
    // salvez data, luna curenta si ziua curenta formata din (year , month)
    let luna = new Date (year,month);
    console.log (luna);
    let lunaTest = luna.getMonth();
    let ultimaZi = luna.getDate();

    // cat timp luna curenta nu se modifica creste ultima zi
    while(lunaTest == month){
        luna.setFullYear(year,lunaTest,ultimaZi++);
        lunaTest = luna.getMonth();        
    }
    console.log (`Ultima zi din luna este: ${ultimaZi-2}`);
    
/*   ********* Solutia lor: *************************
Let’s create a date using the next month, but pass zero as the day:

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0); 
  return date.getDate();
}

alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28

Normally, dates start from 1, but technically we can pass any number, 
the date will autoadjust itself. So when we pass 0, 
then it means “one day before 1st day of the month”, 
in other words: “the last day of the previous month”.  // in other words: sa-i f#t :)

Open the solution with tests in a sandbox.
*/
}

getLastDayOfMonth(2012, 1);
let dateNow = new Date();
const year= dateNow.getFullYear();
const month = dateNow.getMonth(); 
getLastDayOfMonth(year,month);



// ****************************************************
/*
How many seconds have passed today?
importance: 5

Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000 // (3600 * 10)

The function should work in any day. That is, it should not have a hard-coded value of “today”.
*/

function getSecondsToday(){
    let today = new Date();
    let now = new Date();

    today.setHours(0, 0, 0, 0);

    console.log(`astazi au trecut: ${now.getHours(today)} ore , ${now.getMinutes(today)} minute si ${now.getSeconds(today)} secunde`);     
    console.log ((`${now.getHours(today)}` * 3600 ) +  (`${now.getMinutes(today)} ` * 60)  + (`${now.getSeconds(today)}`) );

    
}

getSecondsToday();

//******************************************



