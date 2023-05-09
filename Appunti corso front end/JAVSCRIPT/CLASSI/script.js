class Mobile extends Phone {
    constructor(isLocked = true){
        this.isOn = false;
        this.isLocked = isLocked;
        super()
    }

    isOn() {
        this.isOn = true
    }

    turnOff(){
        this.isOn() = false
    }
    turnOn(){
        this.isOn() = true
    }
}


const mobile = new Mobile(true)



class Phone {
    constructor(){
     this.isOnCall = false
    }

    endCall(){
        if(!this.isOncall){
            console.error("busy");
        }
        this.isOncall = false
        return   
    }


    isOnCall(){
        if(this.isOnCall){
            console.error("not busy");
        }
        return
    }
}

const telefono = new Phone(true)



telefono.Mobile()