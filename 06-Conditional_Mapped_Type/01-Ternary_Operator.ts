
       //----------Ternary operator with values----------//

/*
In a wide range of programming languages, we can find **if/then/else** logic. JavaScript provides a ternary1 
operator that allows us to express this kind of logic concisely. For example.
*/


/*
const x = 16
const isXNegative = x >= 0 ? "no" : "yes"
          
const isXNegative: "no" | "yes"
*/



        //----------Conditional types----------//

/*        
Conditional types allow for types to be expressed using a very similar (basically, the same) 
syntax
*/

class Grill {
  startGas() {}
  stopGas() {}
}
class Oven {
  setTemperature(degrees: number) {}
}
 
type CookingDevice<T> = T extends "grill" ? Grill : Oven
 
// let device1: CookingDevice<"grill">
      
let device1: Grill
let device2: CookingDevice<"oven">
      
// let device2: Oven



// Let’s remove everything except for the conditional type:

// type CookingDevice<T> = T extends "grill" ? Grill : Oven 


        //----------Expressing conditions----------//


/*

On the right side of the = operator, you can see the same three parts from our definition of a 
traditional value-based ternary operator

        
condition ? exprIfTrue : exprIfFalse

   --->part<---	         --->expression<---

     condition           T extends "grill"

    exprIfTrue                Grill

    exprIfFalse	               Oven   
    
*/    


const one = 1;
// const one: 1

const two = 2;    
// const two: 2

const ten = 10;
 
type IsLowNumber<T> = T extends 1 | 2 ? true : false
type TestOne = IsLowNumber<1>       
// type TestOne = true

type TestTwo = IsLowNumber<2>
// type TestTwo = true

type TestTen = IsLowNumber<10>    
// type TestTen = false

type TestTenWithTwo = IsLowNumber<10 | 2>           
// type TestTenWithTwo = boolean
    
    


