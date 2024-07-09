function doSomethingRisky() {
    if (Math.random() > 0.5)  return "ok"
    else if (Math.random() > 0.5) throw new Error("Bad luck!")
    else throw "Really bad luck"
  }
   
  try {
    doSomethingRisky()
  } catch (e: unknown) {
    if (e instanceof Error) {
      e
     
 // var e: Error
    } else if (typeof e === 'string') {
      e
     
 // var e: string
    } else {
      // Last resort
      console.error(e)
                   
  //var e: unknown
    }
  }

  // Same Function //
   
  try {
    doSomethingRisky()
  } catch (err) {
           
  var err: unknown
  } 