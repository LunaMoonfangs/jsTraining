

function primeNo(n){
   var i;
    
    for (i=2;i<n;i++){
        if(n % i == 0 )
            return false;           
        
        else
            return true;
        
    }
    }   
    
    var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}

function primeFactor(n){
    var i=2, j=0;
    var divizori = [];
    if(n==2){
        return 2;
    }
    for (i=2;i<n;i++){
        if(n % i == 0){
            divizori[j++]=i;
        }
    }
    return divizori;
}

var x = prompt ('Introdu un numar: ');
console.log('***** Nr prime ******');

console.log( 'Este numarul ' + x + ' prim ? ' , primeNo(x));
console.log ('Divizorii lui ' + x + ' sunt: ' + primeFactor(x)); 

console.log('****** Fibonaci ******* ');

function fibonacci(n){
    var fibo = [0,1,1] , i=2;

    if (n <= 2){
        return 1;
    }   
    for (i=3;i<=n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2];     
    }
    return fibo[n];    
   
}

console.log('Numarul Fibonacci pt ' + x + ' este: ' +  fibonacci(x));

console.log('****** Find the greatest common divisor of two numbers  **********');

var y = prompt ('Introdu alt numar: ');

console.log( 'Este numarul ' + y + ' prim ? ' , primeNo(y));
console.log ('Divizorii lui ' + y + ' sunt: ' + primeFactor(y));
console.log('Numarul Fibonacci pt ' + y + ' este: ' +  fibonacci(y));

function divComun(a,b){
    var divizor=2;
    var celmaimaredivizor = 1;

    if(a <2 || b < 2)
    return 1;

    while((a >= divizor) && (b>=divizor)){
        if(a % divizor == 0 && b % divizor == 0){
            celmaimaredivizor = divizor;            
        }
        divizor++;
    }
    return celmaimaredivizor;
}

console.log('Cel mai mare divizor comun dintre ' + x + ' si ' + y + ' este: ',divComun(x,y));

console.log('********* merge two sorted arrays ****');

/*

function sortArray(n){
    var temp;
    for(var i=1;i<=n.lenght;i++){
        if(n[i]<n[i-1]){
           temp=n[i-1];
           n[i-1]=n[i];
           n[i]=temp;
        }
    }
    return n;
}

var arr1 = [0,5,2,7,77,2,3,4,54,44,78] , arr2 = [12,54,7,2,1,0,4];

//console.log('Arr1 sortat este: ', sortArray(arr1));
//console.log('Arr2 sortat este: ', sortArray(arr2));

var temp,i=0;

for(i=0;i<=arr1.length;i++){
    if(arr1[i]>arr1[i-1]){
        temp=arr1[i];
        arr1[i]=arr1[i-1];
        arr1[i-1]=temp;
    }
    
}

console.log(arr1);
*/