function missingNo(nums) {
    // I used gauss summation (Craig, I remembered!) to find the sum of numbers 1-100
    let maximum = 5050

    // subtract each element from the maximum
    nums.forEach((element) => {
      maximum = maximum - element
    })
    
    // whatever is left will be the missing number
    return maximum
}

function sumTwoSmallestNumbers(numbers) {  
    // arrange numbers from low to high
const numSort = numbers.sort((a,b) => a - b)

    // add the lowest 2
return numSort[0] + numSort[1]
}

// Props are immutable, can create states

// hooks are objects imported from react libraries to access react stuff
    // only call hooks in function components
    //call hooks from the highest scope possible
        // not loops
        // conditions
        // or nested functions

        //"if you want to catch a fish, you need to set the hook before you cast"

        //only call a state setter one time
            // otherwise, you will need to use a callback
            `
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
              }}>+3</button>
            `
    
        // massEffect
              // useEffect uses "side effects"

              const showPokemon = () => {
                setCount(count + 1)
                console.log(`I Hit the button `)
            }
            
            // two params, callback (required) and dependency array (opt but rec)
            // always fires if no depArray
                // if depArray = [], only called on inital
                // otherwise, activates any time an element of depArray changes
            useEffect(() => {
                getPokemon(count)
                console.log(`pokemon number ${10 + count} added`)
            }, [count])

       ` rcfe = 

        function notes-4t() {
          return (
            <div>notes-4t</div>
          )
        }
        
        export default notes-4t`