//HTML structure
//CSS presentation and design (Cascading Style Sheets)
//javaScript -> action of websites & backbone of the internet
    // the computer is dumb, the programs are sophisticated
    // formal languages exist in science for specific tasks 
    // java has exact rules, but some flexibility
        // C and C++ are ruthless
//Languages rely on:
    //Tokens ($)
    //Structure (order, ex {if(])
    //Tokens + Structure = Syntax
// Values of javaScript
    // String
        //'Anything goes except \
        // Backticks are siiiikk    ``  you can line break
        // Concatenate to join with + or , Console.log()
        // ${17}, ${true}, ${literally any variable}
        // Length will give the char#

    // Number
        // +-
        // ** is exponents 
        // Sum equals itself plus +=
        // Sum equals itself minus -=
        // Sum equals itselt multiplied by *= 
        // Sum equals itself divided by itself /=
        // Sum plus one ++ or += 1
        // Sum of itself  plus 
        // Floating Point
    // Boolean
        // If is a conditional statement that uses comparison to evaluate a binary condition
        // Else if adds another
        // Else is a landing point
        // Equals ===
        // Not Equals !==
    // Null
        // intentional absence of a value, true zero
    // Undefined
        // often accidental lack of value, 
        // not a number = NaN, result of adding to undefined
    // Variable
        // Should be coherent
        // Camel case
        // Let IS changeable, undefined variable ex. let score;
        // Const is unchanging
        // Var is for very strange cases
    // Functions
        // Called via parentheses, inputs or expected values are entered inside the parenthesis
            // function callMeMaybe()  {
                // whateverTheFunctionDoes.jpg
            // }
            //console.log(callMeMaybe())
    // Objects
        // console
    // Methods
        //.log



let mistakeOne = "$2.00"
let mistakeTwo = "$2.50"
const a = mistakeOne.slice(1,4)
const b = mistakeTwo.slice(1,4)
if (a - b < 1) {
    console.log('Close enough!')
}

let sum = 3
console.log(sum)
sum ++
console.log(sum)
sum += 7
console.log(sum)

console.log(sum)


let myVariable
// this generates an error without the let function, but yields undefined when you use let
console.log(myVariable)

console.log("I want to learn Python now too")


// Initialize a new repository in the current directory: (Only do this command once)
// - git init

// Add/Stage all modified files:
// - git add .

// Commit all staged files to repo with a commit message: 
// - git commit -m "Commit message"

// Connect local git repository to Github repository: (Only do this section once)
// - Create new repository on GitHub.com
// - copy text from Github under `...or push an existing repository from the command line`
// (Should be 3 lines of text (git remote add... git branch... git push...))
// - paste these lines of code into your terminal
// - Refresh Github repo to confirm that changes were pushed


// **Make changes to code**
// - git add .
// - git commit -m "commit message"
// - git push


// OTHER HELPFUL COMMANDS:
// - git status : gives you helpful info. Read it a lot to get used to it
// - git log : gives you a record of all commits


// *You do not have to commit after each add
// *You do not have to push after each commit

// ANALOGY: You are creating a movie one photograph at a time
// - Dress the actors appropriately (make changes to your code files)
// - Once actors look good, bring them up on-stage (git add .)
// - Take a photograph of the scene (git commit -m "act 1 scene 1")
// - Send that photograph and all previous photographs to Instagram so other filmmakers can see your progress (git push)
// - Change actors' appearance/positions for next scene (make more changes to code)
// - Place actors back on stage properly (git add)
// - Take the next photograph (git commit)
// - Share online (git push)