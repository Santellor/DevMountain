// Array names should often pluralized
    // Indexes begin at Zero

    // const determines the nature/status as an array, not its values within. 
        // const myMeals = [`Steak`, `Hamburger`, `Burrito`, `Soup`]
        // myMeals[4] = `Crepes`

    // go past this - `undefined`
        // console.log(myMeals[7]) 

    // to add to the end, ex: myMeals.push("sushi")
        // myMeals.push(`Sushi`)

    // to remove from the end
        // myMeals.pop()

    // to save a removed item, make a variable
        // let dinnerTonight = myMeals.pop()

    // to know the length
        // console.log(myMeals.length)

    //unshift adds to the beginning
        // myMeals.unshift(`Pancakes`)
        // myMeals.unshift(`Waffles`)
        // myMeals.unshift(`Eggs`)

    //shift removes the first, I also made a variable
        // let protein = myMeals.shift()

    //these are often chained
        // myMeals.push(protein)

    //.includes checks if the query is present
        // console.log(myMeals.includes(`Eggs`))

    //.indexOf returns the location of the query in the array, returns -1 if not found
        // let fluffyDelight = myMeals.indexOf(`Pancakes`)
        // console.log(myMeals[fluffyDelight])

    //.slice will copy an array first param specifies start AND INCLUDES IT, second param specifies stop AND EXCLUDES IT
        // const basicallyTheSameFood = myMeals.slice(0,2)
        // console.log(basicallyTheSameFood)

    //.splice will edit the array. param1 = starting index, param2 = how many to delete, param3 = what to place in their stead
        // myMeals.splice(0,0,`Protein Shake`)

    // steak is too expensive
        // const imBroke = myMeals.indexOf(`Steak`)
        // myMeals.splice(imBroke,1)

// Strings
    //Also have 0-count indexes 
    //.length & .slice will work 

// LOOPS
    // While repeats as long as a condition is true
    // const ultimatePower = 9001
    // let myPower = 80

    // while (ultimatePower > myPower) {
    //     myPower += 1000
    //     console.log(myPower)
    // }

    // For repeats under the start and until the stop condition as the variable increases
    // allows for more concise variables and more flexibility

        // let hillHeight = 5
        
        // function thatsABigHill() {
        //     if(hillHeight < 5.5) {
        //         console.log(`This is a big hill though`)
        //     } else {
        //         console.log(`I knew I could`)
        //     }
        // }

        // for (let i = 0; i < hillHeight; i++) {
        //     hillHeight += .1
        //     console.log(`I think I can`)
        //     thatsABigHill()
        // }

//Arrayception - nested arrays
    // pull from a referenced nested array by following the brackets with methods or specifications
    const christopherNolan = [
        `Memento`,
        `Inception`,
        [`The Dark Knight`, `The Dark Knight 2`, `The Dark Knight 3`]
    ]
    console.log(christopherNolan [2][2])    
    
    // break will stop any loop 
    for (let i = 0; i < christopherNolan.length; i++ ) {
        console.log(christopherNolan[i])
    
        if(christopherNolan[i] === `Inception`) {
        console.log (`we got it`)
        break
        }
    }

//forloopception - nested for loops 
    // completes the inner loop before the outer loop 
    // inefficient, but occasionally necessary for when you want something scalable with functions operating at different ratios (one loop works twice while the other works once)

