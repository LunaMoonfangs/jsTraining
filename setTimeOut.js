// *********************** serTimeOut si setInterval *************

console.log(`*********************** serTimeOut si setInterval ****************`);

// Output every second
// importance: 5

// Write a function printNumbers(from, to) that outputs 
// a number every second, starting from from and ending with to.

// Make two variants of the solution.

//     Using setInterval.
//     Using nested setTimeout.

function printNumbers (from , to) {

    function interval() {
        for(let i = from ; i <= to ; i++ ){
            console.log(`Delay cu interval: `, i);
        }
    }

    // function nestedInterval() {
    //     for(let i = from ; i <= to ; i++){
    //         console.log(`Delay cu nestedInterval: `, i);
    //         setTimeout( nestedInterval , 2000);            
    //     }
    // }

    if(from > to){
        console.log(`${from} este mai mare ca ${to}`);        
    } else {
        let timerTimeout = setTimeout( interval , 2000 );
        debugger;
        let start = from;
        let stop = to;

        let timerNested = setTimeout( function nestedInterval() {
            //for(let i = from ; i <= to ; i++){  // cu for intra in bucla fara sa se opreasca
                if(start !== stop+1){
                
                console.log(`Delay cu nestedInterval: `, start++);
                setTimeout( nestedInterval , 1000);            
            }
        } , 1000 );
        // daca am folosit clearTimeout nu mai porneau 
        // clearTimeout(timerNested);
        //clearTimeout(timerTimeout);
    }
}

printNumbers(11,5);
printNumbers(1,5);