class Veicolo extends Auto {
    constructor(turnOn = false){
        this.turnOn = turnOn;
        this.turnOff = true;
        super();
    }

    turnOff(){
        if(this.turnOff != this.turnOn()){
            this.turnOff = true
        }
        else {
            this.turnOn = true
        }
        return
    }


    accellerare(){
        this.accellerare = true
        return
    }

    sterzare(){
        this.sterzare = true
        return
    }
    
}


const auto = new Veicolo();


class Auto {
    constructor(){
        this.suonaIlClacson = suonaIlClacson ;
        this.metteLeFreccie = metteLeFreccie;
    }

    suonaIlClacson(){
        this.suonaIlClacson = true
        return
    }

    metteLeFreccie(){
        this.metteLeFreccie = true
        return
    }

}



const brumBrum = new Auto()




class Luci extends Fanali {
    constructor(){
        this.abbaglia = abbaglia;
        this.rivelaOscurità = rivelaOscurità
        super()
    }

    abbaglia(){
        this.abbaglia = true
        return
    }

    rivelaOscurità(){
        this.rivelaOscurità = true
        return
    }
}

const luce = new Luci()

class Fanali {
    constructor(){
        this.turnOn = turnOn
        this.isOn = false
        this.turnOff = this.turnOff
    }

    turnOn_Off(){
        if(!this.isOn){
            this.turnOn = true
        }
        else{
            this.turnOff = true
        }
        
    }

}

const cikolo = new Fanali()