/* 
Let’s try 5 array operations.

    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggae to the array.

The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/
/*
let styles = ['Jazz','Blues'];
styles.push('Rock1');
styles.push('Rock2');
styles.push('Rock3');
styles.push('Rock4');
styles.push('Rock5');

//replace the middle

if((styles.length-1) % 2 == 0 ){
    styles[(styles.length-1)/2] = 'Classics';
}else {
    styles[(styles.length-2)/2] = 'Classics';
}

// turnary
// ((styles.length-1) % 2 == 0 ) ? styles[(styles.length-1)/2] = 'Classics' : styles[(styles.length-2)/2] = 'Classics';

alert(`Sirul dupa adaugarea Classics: ` + styles);

alert(`Am eliminat: ` + styles.shift());
styles.unshift('Rap','Raggae');
alert(`Sirul dupa adaugarea Rap si Raggae: ` + styles);

*/

// ********************************************

/* 
Sum input numbers
importance: 4

Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/
// din solution ca mie nu mi-a iesit :)
/*
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );

  */
/*

A maximal subarray
importance: 2

The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)

If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0

Please try to think of a fast solution: O(n2) or even O(n) if you can.

Open a sandbox with tests.

*/

/*
debugger;
//let maxim = 0;
let arr = [1,-5,2,5,1,8,4,-1,-9,6];

function getMaxSubSum(arr){
    let tempMax = 0;
    let tempArr = []; 
    let tempIndex = 0;
    tempArr[tempIndex] = 0;
    //for (let i of arr){
        for( let j=0 ; j < arr.lenght ; j++ ){
            console.log('j este: ' + j + ' tempIndex este: ' + tempIndex);
           if( arr[j] > 0){
               tempArr[tempIndex] += arr[j] ;
               console.log('tempArr' + tempArr);
           } else {
               tempIndex++;
               tempArr[tempIndex] = 0;
           }
           if (tempArr[tempIndex] > tempMax){
               tempMax = tempArr[tempIndex];
           }     
        }
    //}

    //tempMax=0;
        for(let i=0 ; i<tempArr.length ; i++){
           if (tempMax < tempArr[i]){
               tempMax=tempArr[i];
               console.log('tempMax este' + tempMax);
           }     
        }
    alert('temp max este: ' + tempMax);    
    }

getMaxSubSum(arr);   

// 



let arr = [1, -5, 2, 5, 1, 8, 4, -1, -9, 6];

function getMaxSubSum(arr) {
    let tempMax = 0;
    let tempArr = [];
    let tempIndex = 0;
    tempArr[tempIndex] = 0;
    for (let elm of arr) {
        
        console.log('j este: ' + elm + ' tempIndex este: ' + tempIndex);
        if (elm > 0) {
            tempArr[tempIndex] += elm;
            console.log('tempArr ' + tempArr);
        } else {
            tempIndex++;
            tempArr[tempIndex] = 0;
        }
        if (tempArr[tempIndex] > tempMax) {
            tempMax = tempArr[tempIndex];
        }
        
    }

    alert(`tempArr este: ` + tempArr);
    for (let elm of tempArr) {
        if (elm >= tempMax) {
            tempMax = elm;
        }
    }

    alert('temp max este: ' + tempMax);
}

getMaxSubSum(arr);   
*/


