function ciao() {
    var x
do {
    x = prompt("inserisci un numero dispari stronzo")
} while (x % 2 != 0);
}

ciao()


var last


function sortNumbers(numbers){
    var ret = []

    for(i = 0 ; i < numbers.lenght; i++){
        for(j = 0 ; j < numbers.lenght ; j++){
            if(numbers[j] > numbers[i] && numbers[i] > last ){
                temp = numbers[i]
            }
        }
    }
    last = temp
    return ret
}