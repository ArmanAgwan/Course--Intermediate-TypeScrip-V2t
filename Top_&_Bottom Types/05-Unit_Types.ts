
      //----------Unit Types----------//

 
// Unit types are types that represent a set of exactly one value. An example of this is a literal type

// let num: 65 = 65  // represents the set { 65 }
    


// In TypeScript, the types null and undefined are both unit types.

/*

let myNull: null = null
let myUndefined: undefined = undefined
 
 
myNull = undefined   //error
// Type 'undefined' is not assignable to type 'null'.
 
myUndefined = null   //error
// Type 'null' is not assignable to type 'undefined'.

*/


// the void type is almost a unit type, but it can check against undefined as well

/*

let myVoid: void = (function() {})()// invoking a void-returning IIFE
let myNull: null = null
let myUndefined: undefined = undefined
 
myVoid = undefined
myVoid = null    // error
// Type 'null' is not assignable to type 'void'.
 
myUndefined = myVoid   // error
// Type 'void' is not assignable to type 'undefined'.
myNull = myVoid // error
// Type 'void' is not assignable to type 'null'.

*/