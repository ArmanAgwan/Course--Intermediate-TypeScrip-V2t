
        //----------CommonJS Interop----------//

/*
Things can sometimes get a bit tricky when consuming CommonJS modules that do things that are incompatible with 
the way ES Modules typically work.
*/


/*

// @filename: banana.js
class Banana {
  peel() {}
}
module.exports = { Banana }
////////////////////////////////////////////////////////
// @filename: index.js
const Banana = require('./banana') // CJS style import
const banana = new Banana()
banana.peel()

*/


/*
In this scenario, if we converted the index.js file to TypeScript, we could continue to use 
the banana.js module as-is by using a namespace import
*/


/*

class Banana {
    peel() {}
  }
  module.exports = { Banana }
  ////////////////////////////////////////////////////////
  // @filename: index.ts
  import { Banana } from './banana'
   
  const banana = new Banana()
  banana.peel()
          
//   (method) Banana.peel(): void

*/


/*
If you’ve used Node.js before, this is a common pattern you may see around the system modules. 
the following JavaScript
*/


/*
const fs = require("fs")
fs.readFileSync('example.txt')
*/


// Into this TypeScript


/*
// namespace import
import * as fs from "fs"
fs.readFileSync('example.txt')
*/