
         //----------Utility types that use conditional types----------//

/*   
There are several types that are broadly useful enough that TypeScript includes them as part of the 
“core types” for the JS language.

Now that we’ve learned about conditional types, let’s study the built-in utility types Extract and 
Exclude, which are implemented with conditional types
*/


              //----------Extract----------//

// Extract is useful for obtaining some sub-part of a type that is assignable to some other type.


/*

type FavoriteColors =
  | "dark sienna"
  | "van dyke brown"
  | "yellow ochre"
  | "sap green"
  | "titanium white"
  | "phthalo green"
  | "prussian blue"
  | "cadium yellow"
  | [number, number, number]
  | { red: number; green: number; blue: number }
 
type StringColors = Extract<FavoriteColors, string>      
// type StringColors = "dark sienna" | "van dyke brown" | "yellow ochre" | "sap green" | "titanium white" | "phthalo green" | "prussian blue" | "cadium yellow"

type ObjectColors = Extract<FavoriteColors, { red: number }>        
// type ObjectColors = {
//     red: number;
//     green: number;
//     blue: number;
// }
type TupleColors       
// type TupleColors = [number, number, number]
  = Extract<FavoriteColors, [number, number, number]>

  */


              //----------Exclude----------//


//   Exclude is the opposite of Extract, in that it’s useful for obtaining the part of a type that’s not assignable to some other type
  
  // a set of four specific things
  type FavoriteColors =
    | "dark sienna"
    | "van dyke brown"
    | "yellow ochre"
    | "sap green"
    | "titanium white"
    | "phthalo green"
    | "prussian blue"
    | "cadium yellow"
    | [number, number, number]
    | { red: number; green: number; blue: number }
   
  type NonStringColors = Exclude<FavoriteColors, string>
             
//   type NonStringColors = [number, number, number] | {
//       red: number;
//       green: number;
//       blue: number;
//   }  


    //----------How do these work?----------//
    
// Here’s the complete source code for these types




/**
 * Exclude from T those types that are assignable to U
 */
// type Exclude<T, U> = T extends U ? never : T
/**
 * Extract from T those types that are assignable to U
 */
// type Extract<T, U> = T extends U ? T : never

