
       //----------Scopes and TypeParams----------//

/*       
When working with function parameters, we know that “inner scopes” have the 
ability to access “outer scopes” but not vice versa:
*/


/*

function receiveFruitBasket(bowl) {
    console.log("Thanks for the fruit basket!")
    // only `bowl` can be accessed here
    eatApple(bowl, (apple) => {
      // both `bowl` and `apple` can be accessed here
    })
  }

*/  


        // outer function
function tupleCreator<T>(first: T) {
       // inner function
    return function finish<S>(last: S): [T, S] {
      return [first, last]
    }
  }
  const finishTuple = tupleCreator(3)
  const t1 = finishTuple(null)
        
//   const t1: [number, null]
  const t2 = finishTuple([4, 8, 15, 16, 23, 42])
        
//   const t2: [number, number[]]



       //----------Best Practices----------//

    // **Define type parameters as simply as possible. Consider the two options for listToDict:

interface HasId {
  id: string
}
interface Dict<T> {
  [k: string]: T
}
 
function example1<T extends HasId[]>(list: T) {
  return list.pop()
          
// (parameter) list: T extends HasId[]
}
function example2<T extends HasId>(list: T[]) {
  return list.pop()
          
// (parameter) list: T[]
}
 
class Payment implements HasId {
  static #next_id_counter = 1;
  id = `pmnt_${Payment.#next_id_counter++}`
}
class Invoice implements HasId {
  static #next_id_counter = 1;
  id = `invc_${Invoice.#next_id_counter++}`
}
 
const result1 = example1([
        
// const result1: HasId | undefined
  new Payment(),
  new Invoice(),
  new Payment()
])
 
const result2 = example2([
        
// const result2: Payment | Invoice | undefined
  new Payment(),
  new Invoice(),
  new Payment()
])