class Robot {
    constructor(name, power, army){
        this._power = power;
        this._name = name;
        this._army = 100;
        this._looseArmy = 0;

    }
    get name() {
        return this._name;
    } 
    
    get power() {
        return this._power;
    }

     army() {
        console.log(this._name + " has an army of " + this._army);
    }
     attack(hit) {
         this._army -= hit; 
         console.log("Your army was attack, Now you have " + this._army);
     }

}

var kingRobot = new Robot("carlos", 100);
console.log(kingRobot.name+" has a power level of "+ kingRobot.power );
kingRobot.army();
kingRobot.attack(20);
