
     //----------Native ES Module Support---------//


     /*
     This means you can natively run code containing thing like import { Foo } from 'bar', 
     use top-level await and more!

     How to unambiguously indicate which type of module you’re authoring
     
           **Files with the .mjs extension are treated as native ES modules
           **Files with the .cjs extension are treated as CJS modules

     You can also indicate whether .js files in your project should be treated as ES or CJS 
     modules. In your package.json you may include a top-level "type" field with either of the 
     following values
     
           **"module" indicates that .js files should be run as ES modules
           **"commonjs" indicates that .js files should be run as CommonJS

     Note that even as of Node 20.8.0, Node.js still assumes .js files are CommonJS if you specify 
     no "type" field at all in your "package.json"     
     
     */