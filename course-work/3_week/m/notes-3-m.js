//Typescript
    // next.js
    // Angular
    // Svelte

//Regular Expressions = ReGex for string stuff
    //match is a Regex thing
    //function XO(str) {
    // let x = str.match(/x/gi);
    // let o = str.match(/o/gi);
    // str.match()
    // return (x && x.length) === (o && o.length);

//Array indexes ROUND DOWN

// Node.js
    //node
        // runtime environment that compiles code on our machine
    
        // why node?
            //Control the file system and operating system
            //debug before browser
            //Be able to use other dev's tools & code in your project
            //Web app with server side js
        
            //running programs with node 
                // node <filename>
                // in terminal, node will open basic js 

            //Debugging
                //The most important skill you can develop
                    //Syntax is tokens
                    //Runtime is misattribution
                    //Logic is a brain error
                        // console.error()
                        // console.warn()
                        // console.dir(`file i want to know the directory of`)

            
                
    //npm
        // automates installing programs
            // global: system-wide
                // npm uninstall --global
                // npm install --global
            // local: per-project basis 
                //project becomes node package and it geeeeets it
                    // npm init -y
                        // creates package.json + package lock
                        // to remove, delete node modules dir and json file
                

        // json is a file of packages 
            // that is being saved with your code
                // that allows you to install any packages attached to base code
                    // packages also install their own packages!

        


    //modules = js file
        // modularizing means housing a few functions max per file
        // 1 function per file 
            // in react, this is a MUST. jsx
        // export declaration
            // makes values available for other files
            // exports an object, variable to be exported, var, var 
                // named exports
                    // export {myFunction, myFunction2}
                    // name is both in key value pair: {myFunction, myFunction2}
                        // `myFunction`: myFunction
                        // `myFunction2`: myFunction2
                // default exports
                    // export default {myFunction, myFunction2}
                        // only one, follow with named

                //cjs: 
                    `const exportMe = 'hi';
                    module.exports = exportMe;`

                    `module.exports = {
                        prettyPrintCupcake: prettyPrintCupcake,
                        simplePrintCupcake: simplePrintCupcake,
                      };`
                
        // import declaration
            // pulls available values from export
                // named import
                    //import {myFunction} from "./filePath"
                    // USES DESTRUCTURING
                // default import
                    //import newVarName from "./filePath"
                // import newVarName, {myFunction, myFunction2} from "./filePath"
                // cjs:
                    `const { prettyPrintCupcake } = require('./cupcake-printer.cjs');`
            // cannot use import statement outside a module
                // add to package.json
                    //"type": "module" 


// from lab

insertAdjacentHTML(position, text)
`position
A string representing the position relative to the element. Must be one of the following strings:

"beforebegin"
Before the element. Only valid if the element is in the DOM tree and has a parent element.

"afterbegin"
Just inside the element, before its first child.

"beforeend"
Just inside the element, after its last child.

"afterend"
After the element. Only valid if the element is in the DOM tree and has a parent element.

<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->


YOU CAN USE INDEXES IN FOREACH

word.split(``).forEach((wordLetter, i) => {
    if (letter === wordLetter) {    
    letterBoxes[i].innerHTML = wordLetter 
    }
})

}

HOW TO FIND AN ELEMENT WE INTERACTED WITH IF WE STILL HAVE THE EVENT
    also how to change attributes
const handleGuess = (guessEvent, letter) => {
    const button = guessEvent.target;
    button.setAttribute('disabled', true);

`

// git diff 
    // git diff will show the DIFFERENCES IN A SPECIFIC FILE BETWEEN COMMITS


            
                    


        
        
