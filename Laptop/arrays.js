// Remove duplicate members from an array 

let arr1 = [0,1,2,3,4,5,6,7,8,9,0,1,6,7,5,5,0,4,4,6,5,7,5,3,2];

let lungime = arr1.length;
let dubluri = 0, i, j=i+1, removed = [];
console.log('lungimea = ', lungime);
console.log(arr1);
debugger;
for (i=0; i<arr1.length;i++){
    for(j=i+1;j<=arr1.length;j++){
        console.log('i= ' + i + ' j= ' + j);
        if(arr1[i] === arr1[j]){
            
            console.log('a[i]= ' + arr1[i]);
            console.log('a[j]= ' + arr1[j]);
            
            removed  = arr1.splice(j,1);
            j--;                                            
            console.log('elimina acum: ' + removed);
            dubluri++;
            lungime = arr1.length;
            
            console.log('eliminari = ' + dubluri);
            console.log('array acum: ', arr1);
            console.log('lungimea = ', lungime);
            console.log('sterse acum: ', removed);  
        }
    }
}

console.log(arr1);
console.log(removed);
console.log('Au fost eliminate ' + dubluri + ' dubluri.');


// arrow function
/*
const myArr = [0,1,2,3,4,5,6,7,8,9,0,1,6,7,5,5,0,4,4,6,5,7,5,3,2];
const newArr = [];
debugger;
myArr.forEach((elem, i) => {
	if (!newArr.includes(elem)) {
		newArr.push(elem);
	}
});

console.log("newArr", newArr);
*/

