/*
var n1 = {
    isLocked: true,
    isOn : false,
    turnOn:(function(){
        console.debug(this)
        this.isOn = true;
    }).bind(this)
};



function createMobile(isOn,isLocked){
    return {
        isOn,
        isLocked,
        turnOn: () => this.isOn = true
    }
}

var mobile1 = createMobile(false,true);
var mobile2 = createMobile(false,true);
var mobile3 = createMobile(false,true);

function Mobile(isOn = false,isLocked =  true) {
    this.isOn = isOn
    this.isLocked = isLocked
    this.turnOn = () => this.isOn = true
};



var mobile = new Mobile(false,false);


*/


/*


function User(id,name,surname){
    this.id = id
    this.name = name
    this.surname = surname
    this.sayHi = () => alert(this.id + " " + this.name + " " + this.surname + " ti saluta")
}




var stamoceloAdi = new User(25,"Cikolino","1")

stamoceloAdi.sayHi()


*/


Object.assign({a: "a"},{b:"b"},{b:"x",c:"c"});



function Calculator() {
    this.n = 0;
    this.calc = n => this.n * n ;
}


var calculator1 = new Calculator();
var calculator2 = Object.assign({},calculator2) // copiare un oggetto in un altro con Object.assign {}


console.debug(calculator1,calculator2)






