
        //----------Mapped Types-----------//

// The basics


type Fruit = {
    name: string
    color: string
    mass: number
  }
   
  type Dict<T> = { [k: string]: T | undefined } // <- index signature
   
  const fruitCatalog: Dict<Fruit> = {}
  fruitCatalog.apple



/* 

  type Fruit = {
    name: string
    color: string
    mass: number
  }
   
  // mapped type
  type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit }
   
  function printFruitCatalog(fruitCatalog: MyRecord) {
    fruitCatalog.cherry
    fruitCatalog.apple
                  
//   (property) apple: Fruit
    fruitCatalog.pineapple
    // Property 'pineapple' does not exist on type 'MyRecord'.
 } 

*/

          //----------Record----------//
          

/* 
    - type MyRecord = { [FruitKey in "apple" | "cherry"]: Fruit }
    + type MyRecord<K extends keyof any, V> = { [Key in K]: V }
*/


    /**
 * Construct a type with a set of properties K of type T
 */
// type Record<K extends keyof any, T> = {
//     [P in K]: T
//   }
  

        //---------- Use with indexed access types----------//


// NOte that we’ve introduced a "Key" term in the mapped type

/* 

type MyRecord<K extends keyof any, V> = { [Key in K]: V }

type PartOfWindow = {       
    // type PartOfWindow = {
    //     document: Document;
    //     navigator: Navigator;
    //     setTimeout: (handler: TimerHandler, timeout?: number | undefined, ...arguments: any[]) => number;
    }
      [Key in
        | "document"
        | "navigator"
        | "setTimeout"]: Window[Key]
    } 

*/

 
      //----------Mapping Modifiers----------//

 


// /**
//  * Make all properties in T optional
//  */
// type Partial<T> = {
//     [P in keyof T]?: T[P]
//   }
//   /**
//    * Make all properties in T required
//    */
//   type Required<T> = {
//     [P in keyof T]-?: T[P]
//   }
//   /**
//    * Make all properties in T readonly
//    */
//   type Readonly<T> = {
//     readonly [P in keyof T]: T[P]
//   }   
  


        //---------Template literal types----------//

        type ArtFeatures = "cabin" | "tree" | "sunset"
type Colors =
  | "darkSienna"
  | "sapGreen"
  | "titaniumWhite"
  | "prussianBlue"
  
  
  type ArtMethodNames = `paint_${Colors}_${ArtFeatures}`
  
  
/* 
    TypeScript provides a few special types you can use within these template literal types

    UpperCase
    LowerCase
    Capitalize
    Uncapitalize
*/

// type ArtMethodNames =
//   `paint${Capitalize<Colors>}${Capitalize<ArtFeatures>}`