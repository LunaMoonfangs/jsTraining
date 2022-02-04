// Remove duplicate members from an array 

var arr1 = [0,1,2,3,4,5,6,7,8,9,0,1,6,7,5,5,0,4,4,6,5,7,5,3,2];

//var duplicate = 'duplicate';
var lungime = arr1.length;
var dubluri = 0, i, j=i+1, removed = [];
console.log('lungimea = ', lungime);
console.log(arr1);

for (i=0; i<arr1.length;i++){
    for(j=i+1;j<=arr1.length;j++){
        console.log('i= ' + i + ' j= ' + j);
        if(arr1[i] === arr1[j]){
            //arr1[j]= duplicate;
            console.log('a[i]= ' + arr1[i]);
            console.log('a[j]= ' + arr1[j]);
            //console.log('elimina: ' + (arr1.indexOf(arr1[j]),1));
            console.log('elimina acum: ' + (arr1.splice(j,1)));
            //arr1.splice(arr1.indexOf(arr1[j]),1);
            removed  = arr1.splice(j,1);
            dubluri++;
            lungime = arr1.length;
            //sters[dubluri] =  arr1.splice(j,1);
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
