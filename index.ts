let firstName = "Ana"; //valid javascript
let lastName: string = "Moe"  //valid strongly type typescript
let x: any; //use for unknown types 
var numbers: number [] = [1,2,3]
var names: Array<string> = ['Bob', 'Casper'];

interface IVehicle {
    wheels: number;
    engine: string;
    drive(): void;
}

class Car implements IVehicle{
wheels: number;
engine: string;

constructor(wheels: number, engine: string){
this.wheels = wheels;
this.engine = engine;
}

drive(): void {
    console.log('Driving');
}
}

let a = new Car(4,'v8');
a.drive();
