//Resources
    //MDN
    //W3

    //Fizzbuzz      
        // const startArray = []
        // const fizzArray = []
        // for(let i = 0; i < 99; i++){
        //     startArray[i] = [i+1]
        // }

        // for(let i = 0; i < startArray.length; i++){
        //     if((startArray[i] % 15) === 0) {
        //         fizzArray[i] = `Fizzbuzz`
        //     } else if((startArray[i] % 3) === 0) {
        //         fizzArray[i] = `Fizz`
        //     } else if((startArray[i] % 5) === 0) {
        //         fizzArray[i] = `Buzz`
        //     } else {
        //         fizzArray[i] = startArray[i]
        //     }
            
        // }

        // console.log(fizzArray)
// Functions, Debugging, and Intro to node 
    //Functions are the Legos
    //Calling or invoking the function is the way to substitute previously written lines of code
        //Arg vs Param 
            // Argument is the value for the variable in the function
            // The Parameter is the variable inside the function. They represent the parameter.
            // Parameters are not necessary for the function to operate
            // Too many args will NOT break in js, will in others (google sheets functions, python)
            // Too few args will return undefined
            // Default Parameters are created by equating it to a default valuable. Arguments passed to this parameter will override this value
                // EX. function(calculateIfSpeeding(mySpeed, speedLimit = 65))


        // Return gives a value and ends the function, Break ends the function
            // Functions OUTPUTS can be defined as variables, but they EXECUTE the function as they are equated
            // Calling a function as a variable without a return will yield undefined
            // Functions will be more consistent if they ALWAYS return the same data type. 
            // FUNCTIONS can only return one value per one value. basic algebra
        
        // Scope 
            // Global Scope - accessible to the entire program
                // Functions contain their own microcosm 
    // Errors & Debugging
        // Syntax
            // Tokens and values placed incorrectly
        // Runtimme 
            // Code breaks ex attempting to capitalize `undefined`
        // Logic 
            // Code will run, but will not return what you wanted
        // Type coercion
            // Strings + integers, etc
            // Number(creates a number from a legible string)
            // +`string` yields a number

// I wanted to try nesting functions. this one adjusts the mile time to be human and rounds it. Pretty sure it doesn't need a parameter because there is only one used
function timeAdj () {        
    // rounds the input
    function roundToHund(mileTime) {
        mileTime = Math.ceil(mileTime * 100)
        mileTime = mileTime / 100 
        return mileTime
    }

    let mileTime = Math.random() * 10 +3; 
    mileTime = roundToHund(mileTime)
    
    return mileTime
}
// This one generates flavor text based on the input
function raceResult(speeed) {
    if (speeed > 9) {
        return `Zone 2 exercise burns body fat`  
    } else if (speeed > 7 ) {
        return `That's pretty quick`
    } else if (speeed > 5 ) {
        return `You should be proud`
    } else if (speeed > 3.7 ) {
        return `You might melt your shoes, boy`
    } else if (speeed > 3 ) {
        return `New World Record`
    } else
    return `You are now legally a vehicle and must obey speed limits`   
}
//starts race
console.log(`BANG!`)
console.log(`And they're off!`)

//provides baseline for calculating the fastest time
const calcWin = [13]

for (let i = 1; i < 10; i++) {
    // creates the current run result as a variable to avoid multiple function callbacks
    let runResult = timeAdj(i)

    // generates racer result
    let announcement = (`Racer number `+i+` ran a mile in `+runResult+` minutes. Coach says: "`+raceResult(runResult))
    console.log(announcement)
    
    // populates the calcWin array with the fastest times
    if (runResult <= calcWin[0] ) {
        calcWin.unshift(runResult)
    }
}
// Declares the fastest time
console.log(`and the fastest time is: `+ calcWin[0])
    
const userInput = [`sqrt`, 16]
if(userInput.length === 3) {
    num1 = userInput[0]
    operator = userInput[1]
    num2 = userInput [2]
} else if(userInput.length === 2) {
    operator = userInput[0]
    num = userInput[1]
}

function fact(num1) {
    let factRes = num1 
    for (let i = 1; i < num1; i++){
      factRes = factRes * (num1 - i) 
    } 
    return factRes
  }

  console.log(fact(5))