
//----------Bottom type: never----------//

/*

A bottom type (symbol: ⊥) is a type that describes no possible value allowed by the system. 
To use our set theory mental model, we could describe this as a type representing 
the set { } (intentionally empty).

TypeScript provides one bottom type: never. 

*/



//-----Exhaustive Conditionals-----//


/*

function obtainRandomVehicle(): any {

}
class Car {
    drive() {
        console.log("vroom")
    }
}
class Truck {
    tow() {
        console.log("dragging something")
    }
}
type Vehicle = Truck | Car

let myVehicle: Vehicle = obtainRandomVehicle()

// The exhaustive conditional
if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
} else if (myVehicle instanceof Car) {
    myVehicle.drive() // Car
} else {
    // NEITHER!
    const neverValue: never = myVehicle
}  
    
*/



/*

function obtainRandomVehicle(): any {

}
class Car {
    drive() {
      console.log("vroom")
    }
  }
  class Truck {
    tow() {
      console.log("dragging something")
    }
  }
  class Boat {
    isFloating() {
      return true
    }
  }
  type Vehicle = Truck | Car | Boat
   
  let myVehicle: Vehicle = obtainRandomVehicle()
   
  // The exhaustive conditional
  if (myVehicle instanceof Truck) {
    myVehicle.tow() // Truck
  } else if (myVehicle instanceof Car) {
    myVehicle.drive() // Car
  } else {
    // NEITHER!
    const neverValue: never = myVehicle  // error
//   Type 'Boat' is not assignable to type 'never'.
  }

  */