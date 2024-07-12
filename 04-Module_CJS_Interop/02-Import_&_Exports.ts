
      //----------Importing Types----------//

  ////////////////////////////////////////////////////////
// @filename: berries/raspberry.ts

/*
export class Raspberry {
    constructor(public color: 'red' | 'black') {}
}
export function pickRaspberries(time: number): Raspberry[] {
  console.log('picking raspberries')
  return []
}
////////////////////////////////////////////////////////
// @filename: index.ts
import { Raspberry } from './berries/raspberry'
 
let x: Raspberry = { color: 'red' };

*/


/*
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = { color: 'red' };


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raspberry_1 = require("./berries/raspberry");
var x = { color: 'red' };
var y = new raspberry_1.Raspberry('red');

*/


/*

// @filename: berries/strawberry.ts
export class Strawberry {}
// 'Strawberry' cannot be used as a value because it was imported using 'import type'.
 
////////////////////////////////////////////////////////
// @filename: index.ts
import type { Strawberry } from './berries/strawberry'
                  
// (alias) class Strawberry
// import Strawberry
let z: Strawberry = { color: 'red' }
new Strawberry()

*/