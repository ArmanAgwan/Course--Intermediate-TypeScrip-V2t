// interface Fruit {
           
//     interface Fruit
//       name: string
//       mass: number
//       color: string
//     }
     
//     const banana: Fruit = {
            
//     const banana: Fruit
//       name: "banana",
//       color: "yellow",
//       mass: 183,
//     }
     
//     // both of these things are exportable
//     export { banana, Fruit }



             //----------Identifier----------//

/*
             const is_a_value = 4
             type is_a_type = {}
             namespace is_a_namespace {
               const foo = 17
             }
              
             // how to test for a (value | namespace)
             const x = is_a_value // the value position (RHS of =).
                           
             const is_a_value: 4
              
             // how to test for a type
             const y: is_a_type = {} // the type position (LHS of =).
                         
             type is_a_type = {}
             // how to test for a namespace (hover over is_a_namespace symbol)
             is_a_namespace    
 */            
             
        //----------Namespaces----------//

    
// a `fetch` kind of function
$.ajax({
    url: "/api/getWeather",
    data: {
      zipcode: 97201,
    },
    success: function (result) {
      $("#weather-temp")[0].innerHTML =
        "<strong>" + result + "</strong> degrees"
    },
  })
  // a `document.querySelectorAll` kind of function
  $("h1.title").forEach((node) => {
    node.tagName // "h1"
           
  })   
  
  
  function $(selector: string): NodeListOf<Element> {
    return document.querySelectorAll(selector)
  }
  namespace $ {
    export function ajax(arg: {
      url: string
      data: any
      success: (response: any) => void
    }): Promise<any> {
      return Promise.resolve()
    }
  }
      
  

          //----------Classes----------//

  
  class Fruit {
    name?: string
    mass?: number
    color?: string
    static createBanana(): Fruit {
      return { name: "banana", color: "yellow", mass: 183 }
    }
  }
  
  
  // how to test for a value
  const valueTest = Fruit // Fruit is a value!
  valueTest.createBanana
             
  
   
  // how to test for a type
  let typeTest: Fruit = {} as any // Fruit is a type!
  typeTest.color
    
  

           