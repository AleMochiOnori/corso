function sumAskingNumber(){
    var n1 = +prompt("bellodecasa")
    var n2 = +prompt("pu cikolino pu")
    var res = sum(n1,n2)
    alert(res)
}



function sum(a,b) {
    return a+b;
}

sumAskingNumber()



/*

TIPI DI VARIABILI

var     Soggetta ad hoisting , viene portata in cima dal compilatore. Si trova nel Gblobal lexical enviroment.
let     Non è soggetta ad hoisting e quindi viene visualizzata solo nello stesso lexical enviroment.
const   Il valore viene congelato all'interno dello stack e quindi il valore non può più essere modificato.


*/



