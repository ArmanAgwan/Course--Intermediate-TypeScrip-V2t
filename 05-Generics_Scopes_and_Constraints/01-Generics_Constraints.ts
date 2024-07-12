
      //----------Generic Constraints----------//

/*      
Generic constraints allow us to describe the “minimum requirement” for a type param, 
such that we can achieve a high degree of flexibility, while still being able to safely 
assume some minimal structure and behavior for use within the scope that has access to the 
type param.
*/



      //----------Motivating use case----------//

/*
Let’s recall the example we used in our Generics chapter, where we arrived at a generic 
function that could convert a data structure like this
*/


const phoneList = [
  { customerId: '0001', areaCode: '321', num: '123-4566' },
  { customerId: '0002', areaCode: '174', num: '142-3626' },
  { customerId: '0003', areaCode: '192', num: '012-7190' },
  { customerId: '0005', areaCode: '402', num: '652-5782' },
  { customerId: '0004', areaCode: '301', num: '184-8501' },
]

const phoneDict = {
    '0001': {
      customerId: '0001',
      areaCode: '321',
      num: '123-4566',
    },
    '0002': {
      customerId: '0002',
      areaCode: '174',
      num: '142-3626',
    },
    /*... and so on */
  }

  function listToDict<T>(
    list: T[], // array as input
    idGen: (arg: T) => string // fn for obtaining item's id
  ): { [k: string]: T } {
    // create dict to fill
    const dict: { [k: string]: T } = {}
   
    for (let item of list) {
      // for each item
      dict[idGen(item)] = item // make a key store in dict
    }
   
    return dict // result
  }


//   Let’s strip away some noise and just study the function signature:

/*
function listToDict<T>(
    list: T[],
    idGen: (arg: T) => string
  ): { [k: string]: T } {
    return {}
  }
*/  


/*
In this situation, we ask the caller of listToDict to provide us with a means of obtaining an id, 
but let’s imagine that every type we wish to use this with has an id: string property, and we should 
just use that as a key.


How might we implement this without generics?

*/


/*
interface HasId {
    id: string
  }
  interface Dict<T> {
    [k: string]: T
  }
   
  function listToDict(list: HasId[]): Dict<HasId> {
    const dict: Dict<HasId> = {}
   
    list.forEach((item) => {
      dict[item.id] = item
    })
   
    return dict
  }

*/


/*

interface HasId {
    id: string
  }
  interface Dict<T> {
    [k: string]: T
  }
   
  function listToDict<T>(list: T[]): Dict<T> {
    const dict: Dict<T> = {}
   
    list.forEach((item) => {
      dict[item.id] = item
  Property 'id' does not exist on type 'T'.
    })
   
    return dict
  }

*/


     //----------Describing the constraint----------//


/*

The way we define constraints on generics is by using the extends keyword.

The correct way of making our function generic is shown in the 1-line change below:

           - function listToDict(list: HasId[]): Dict<HasId> {
           + function listToDict<T extends HasId>(list: T[]): Dict<T> {

Note that our “requirement” for our argument type (HasId[]) is now represented in two places:

           **extends HasId as the constraint on T
           **list: T[] to ensure that we still receive an array

-->T EXTENDS VS CLASS EXTENDS<--

The extends keyword is used in object-oriented inheritance, and while not strictly equivalent to 
how it is used with type params, there is a conceptual connection:

When a class extends from a base class, it’s guaranteed to at least align with the base class 
structure. In the same way, T extends HasId guarantees that “T is at least a HasId”.

*/