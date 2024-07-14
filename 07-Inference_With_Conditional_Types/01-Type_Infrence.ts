
           //----------Type inference in conditional types----------//


/*
In the same release where conditional types were added to TypeScript a new infer keyword was added as well. 
This keyword, which can only be used in the context of a condition expression 
(within a conditional type declaration) is an important tool for being able to extract out pieces of type 
information from other types.
*/



             //----------A motivating use case---------//

/*
Let’s consider a practical example: You use a library that provides a well-typed function, 
but does not expose independent types for the arguments the function takes.

Let’s imagine that there’s a fruit-market npm package, which only exports a 
createOrder function.
*/


// @filename: fruit-market.ts
 
//////////////////////////////////////////////////////////////
//////////////////////// NOT EXPORTED ////////////////////////
//////////////////////////////////////////////////////////////
type AppleVarieties = 'fuji' | 'gala' | 'honeycrisp' | 'granny smith';
type OrangeVarieties = 'navel' | 'valencia' | 'blood orange' | 'cara cara';
type Allergies = 'peach' | 'kiwi' | 'strawberry' | 'pineapple';
type Ripeness = 'green' | 'ripe' | 'overripe';
 
type QuantityRange = {
    min: number;
    max: number;
};
 
type FruitOrderItem<Varieties extends string> = {
    variety: Varieties;
    pricePerUnit: number;
    quantity: number;
    totalPrice: number;
};
 
type FruitOrder = {
    apples: FruitOrderItem<AppleVarieties>[];
    oranges: FruitOrderItem<OrangeVarieties>[];
    subtotal: number;
    salesTax: number;
    grandTotal: number;
};
 
type FruitOrderPreferences = {
    apples: {
        preferredVarieties: AppleVarieties[];
        avoidSeeds: boolean;
        organicOnly: boolean;
        ripeness: Ripeness;
        quantity: QuantityRange;
    };
    oranges: {
        preferredVarieties: OrangeVarieties[];
        seedlessOnly: boolean;
        ripeness: Ripeness;
        quantity: QuantityRange;
    };
    allergies: Allergies[];
    prefersLocalProduce: boolean;
};
 
//////////////////////////////////////////////////////////////
////////////////////////// EXPORTED //////////////////////////
//////////////////////////////////////////////////////////////
export function createOrder(prefs: FruitOrderPreferences): FruitOrder {
    console.log(prefs)
    return {
        apples: [],
        oranges: [],
        subtotal: 0.00,
        salesTax: 0.00,
        grandTotal: 0.00,
    }
}


/*

// @filename: index.ts
import { createOrder } from './fruit-market';
             
// (alias) function createOrder(prefs: FruitOrderPreferences): FruitOrder
// import createOrder
 
type GetFirstArg<T> = any;
 
const prefs: GetFirstArg<typeof createOrder> = {}
 
createOrder(prefs)

*/