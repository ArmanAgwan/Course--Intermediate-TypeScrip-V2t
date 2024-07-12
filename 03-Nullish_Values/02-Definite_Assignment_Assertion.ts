
       //----------Definite assignment assertion----------//

/*
The definite assignment !: assertion is used to suppress TypeScript’s objections about a 
class field being used, when it can’t be proven1 that it was initialized.
*/       



class ThingWithAsyncSetup {
    setupPromise: Promise<any> 
    isSetup: boolean
//   Property 'isSetup' has no initializer and is not definitely assigned in the constructor.
   
    constructor() {
      this.setupPromise = new Promise((resolve) => {
        this.isSetup = false
        return this.doSetup(resolve)
      }).then(() => {
        this.isSetup = true
      })
    }
   
    private async doSetup(resolve: (value: unknown) => void) {
      // some async stuff
    }
  }

 

/*  
TypeScript is warning me that someone could create an instance of this class and 
immediately attempt to access .isSetup before it gets a boolean value
*/


let myThing = new ThingWithAsyncSetup()
myThing.isSetup // what if this isn't assigned yet?
 console.log(myThing.isSetup)         
// (property) ThingWithAsyncSetup.isSetup: boolean




/*
What I know (that the compiler doesn’t) is that the function passed into the Promise 
constructor is invoked synchronously, meaning by the time we receive our instance of 
ThingWithAsyncSetup, the isSetup property will most certainly have a value of false.
*/


/*

class ThingWithAsyncSetup {
    setupPromise: Promise<any> // ignore the <any> for now
    isSetup!: boolean | undefined
   
    constructor() {
      this.setupPromise = new Promise((resolve) => {
        this.isSetup = false
        return this.doSetup(resolve)
      }).then(() => {
        this.isSetup = true
      })
    }
   
    private async doSetup(resolve: (value: unknown) => void)  {
        // some async stuff
     }
  }

  */