
       //---------The infer keyword----------//

/*
The infer keyword gives us an important tool to solve this problem — it lets us extract 
and obtain type information from larger types, by capturing pieces of types into a newly-declared 
type params.
*/



/**
 * If the type `P` passed in is some kind of `PromiseLike<T>` 
 * (where `T` is a new type param), extract `T` and return it.
 * If `P` is not some subtype of `PromiseLike<any>`, pass the 
 * type `P` straight through and return it 
 */
type UnwrapPromise<P> = P extends PromiseLike<infer T> ? T : P;

type test1 = UnwrapPromise<Promise<string>>
//  type test1 = string
type test2 = UnwrapPromise<Promise<[string[], number[]]>>
//   type test2 = [string[], number[]]
type test3 = UnwrapPromise<number>
//   type test3 = number



/*

type OneArgFn<A = any> = (firstArg: A, ..._args: any[]) => void
type GetFirstArg<T extends OneArgFn>
    = T extends OneArgFn
    ? string[]
    : never;

// Test case
function foo(x: string, y: number) { return null }
// function foo(x: string, y: number): null

// Should be string[]
type t1 = GetFirstArg<typeof foo>
    // type t1 = string[]  
    
*/   



      //----------Constraints on infer----------//

/*      
TypeScript 5 allows type param constraints to be expressed on inferred type params. 
For example, what if we wanted to extract the first element of a tuple, but only if 
it’s a subtype of string

Without any kind of constraint, we’re just getting the first element of the tuple, 
no matter what it is
*/



type GetFirstStringIshElement<T> = T extends readonly [
  infer S,
  ..._:any[]
] ? S : never
 
const t1 = ["success", 2, 1, 4] as const  
//    const t1: readonly ["success", 2, 1, 4]

const t2 = [4, 54, 5] as const
//    const t2: readonly [4, 54, 5]
let firstT1: GetFirstStringIshElement<typeof t1>      
//    let firstT1: "success"
let firstT2: GetFirstStringIshElement<typeof t2>     
//    let firstT2: 4