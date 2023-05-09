/*
var numbers = [1,2,3,4,5];
numbers.push(6);
var six = numbers.pop();
numbers.shift(); // 
numbers.unshift(0); // Aggiunge un elemeto al  primo posto in un array
numbers.length // vede il numero di tutti i valori in un array e nelle le stringhe 
*/

var array1 = []


for(i = 1 ; i <= 10 ; i++ ){
    
    var casuale = Math.random().toFixed(2) * 100
    
    array1.push(casuale)
    
}
console.debug(array1)





function map(array, fn){
    let ret = [] 
    for(i = 0 ; i < array.lenght ; i ++){

        ret.push( fn(array[i]));
    }
    return ret
}










// Metodo filter

[1,2,3].filter( n=> n > 1)




