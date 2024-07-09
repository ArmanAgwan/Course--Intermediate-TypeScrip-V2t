
         //----------Null----------//
  
/*        
null means: there is a value, and that value is nothing. While some people believe that 
null is not an important part of the JS language  
*/


/*

const userInfo = {
    name: "Mike",
    email: "mike@example.com",
    secondaryEmail: null, // user has no secondary email
  }

*/


 
        //----------Undefined----------//

 
// undefined means the value isn’t available (yet?)        


/*

interface FormInProgress {
  createdAt: Date
  data: FormData
  completedAt?: Date
}
const formInProgress: FormInProgress = {
  createdAt: new Date(),
  data: new FormData(),
}
function submitForm() {
  formInProgress.completedAt = new Date()
}

*/


       //----------Void----------//

 
// void should exclusively be used to describe that a function’s return value should be ignored


/*

console.log(`console.log returns nothing.`)
        
(method) Console.log(...data: any[]): void

*/



      //----------Non-null Assertion operator----------//

/*   
The non-null assertion operator (!.) is used to cast away the possibility that a value 
might be null or undefined.
*/      



/*

type GroceryCart = {
    fruits?: { name: string; qty: number }[]
    vegetables?: { name: string; qty: number }[]
  }
   
  const cart: GroceryCart = {}
   
  cart.fruits.push({ name: "kumkuat", qty: 1 })  // error
//   'cart.fruits' is possibly 'undefined'.
         
//   (property) fruits?: {
//       name: string;
//       qty: number;
//   }[] | undefined
  cart.fruits!.push({ name: "kumkuat", qty: 1 })

*/