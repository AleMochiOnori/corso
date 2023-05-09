class Veicolo extends Auto {
    constructor(turnOn = false,turnOff){
        this.turnOn = turnOn;
        this.turnOff = turnOff;
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
    constructor(suonaIlClacson,metteLeFreccie){
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
    constructor(abbaglia,rivelaOscurità){
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
    constructor(turnOff,isOn,turnOn){
        this.turnOn = turnOn
        this.isOn = isOn
        this.turnOff = turnOff
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