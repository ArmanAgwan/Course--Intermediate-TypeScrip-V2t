     
    //----------Almost top type: Object----------//


// The object type represents the set { all possible values except for primitives }.
// Primitive value types in JavaScript are 

// { string, number, boolean, Symbol, null, undefined, BigInt }    



/*
let val: object = { status: "ok" }
val = "foo"
// Type 'string' is not assignable to type 'object'.
val = null
// Type 'null' is not assignable to type 'object'.
val = () => "ok"
 
// The type of this value cannot be modeled by an interface
let response:
       
// let response: {
//     success: string;
//     data: unknown;
// } | {
//     error: string;
//     code: number;
// }
    { success: string, data: unknown }
  | { error: string, code: number }
      = { success: "ok", data: [] }
 
val = response
*/



                //----------Almost top type: {} ----------//


// The empty object type {} represents the set 
// { all possible values, except for null and undefined }          


/*

const stringOrNumber: string | number = 4
let nullableString: string | null = null
const myObj: {
  a?: number
  b: string
} = { b: "foo" }
 
 
let val2: {} = 4
val2 = "abc"
val2 = new Date()
val2 = stringOrNumber
val2 = nullableString
// Type 'null' is not assignable to type '{}'.
val2 = myObj.a
// Type 'number | undefined' is not assignable to type '{}'.
//   Type 'undefined' is not assignable to type '{}'.

*/




/*

let withoutUndefined: {} | null = 37
let withUndefined: {} | null | undefined = 38
let anUnknown: unknown = "42"
 
 
withoutUndefined = anUnknown // ❌
// Type '
unknown' is not assignable to type '{} | null'.
withUndefined = anUnknown // ✅

*/



type NullableStringOrNumber = string | number | null | undefined;
type StringOrNumber = NullableStringOrNumber & {}
