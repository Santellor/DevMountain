` function evenOrOdd(number) {

                            if      else
                             v        v
     return number % 2 === 0 ? 'Even' : 'Odd';
   }
`


// Arrow Functions are a new notation for the functions you know and love. 
// if only given one component, they return the provided component

// const defaultsToReturn = (a) => a + 1
// console.log(defaultsToReturn(2))

// silly arrow function with one parameter and no parenthesis. Only time you even can is with single parameter arrow functions
// const doNotDoThis = dumbIdea => `this is a ${dumbIdea}`
// console.log(doNotDoThis(`Bad Idea`))
// setTimeout(() => console.log(`The time it takes to turn in World War Z`), 9000)
// Callback Functions


// Invoked functions = return value

// A method can only be invoked on an object of THE CORRECT data type

// Array Iteration
// For each uses a callback and takes each element as an argument
//... spread operator will split a string
phrase = "Its ya boi"
console.log(...phrase)
mySleepInHours = [6,7,5]
count = 0
console.log(mySleepInHours)
mySleepInHours.forEach((element) => { 
    count = element + count
})
console.log(count)

// map is for each, but makes a clone
mySleepButBetter = mySleepInHours.map((element) => element + 1 )

console.log(mySleepButBetter)

// filter iis map, but clones conditionally
const startWithLetterA = (arr) => {
    return arr.filter((letter) => letter[0].toUpperCase() === `A`)
}

// reduce takes an accumulator and a current element with an optional start index
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),7);
}

`   reduce runs a function across each element of an array and returns only a single value. 
        The function is a callback function, with parameters (a, b) : a is the accumulator, and b is the current value. 
            here, a is the accrued total of added elements. 
            b is the element being modified
                Then, there is a conditional statement that zeroes out any values that are less than zero
                    b might be greater than 0 if so, b, if not, 0
                    finally, the nested callback function concludes, and a zero is provided to tell the reduce function where to begin
 }
 `

// sort
    // sorts an array of strings alphabetically

