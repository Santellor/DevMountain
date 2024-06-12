// const inputArray = [1,2, `Jacob Smith `]

// inputArray.shift()
  
// //removes last value
// inputArray.pop()

// //add 42 to the front
// inputArray.unshift(42)

// //add 42 to the back
// inputArray.push(42)

//     console.log(inputArray)
//make the new array
// const newArr = []

//for every loop, we take the first value of inputArray, add ten to it, then set the first value of newArr to equal that
//loop. i is short for index, index begins at 0
    // i < #, where our number is the length of our array, 
    //i++ mean 1 + i, 0, 1, 2
// for (let i = 0; i<inputArray.length; i++){
//     //input array becomes 10 greater
//     inputArray[i] = inputArray[i] + 10
//     //newArr takes the value of that array
//     newArr[i] = inputArray[i]
// }
// is just an example
const inputArray = [1,2,`jacob`,3,4,`munkhbold`,5,6]

// is just an empty array
const newArray = []

    for (let i = 0; i < inputArray.length; i++) {
        // variable is equal to the total length minus i, with minus one to adjust for index
        let arrayAdjust = inputArray.length - i - 1
        // This fills the new array with the reverse order 
        newArray[i] = inputArray[arrayAdjust]
  }

  valueFound = inputArray.includes(`Claudia`)

console.log(valueFound)
console.log(newArray)

// our array had 20 spots
//we only designated half of those, so we had 0, nothing, 2 , nothing , 4 , no