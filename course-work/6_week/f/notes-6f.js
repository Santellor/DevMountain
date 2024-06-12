//round 2 baby
function findEvenIndex(arr){
    let rightSum = arr.reduce((a,c) => a + c), 
        leftSum

    for (let i = 0; i < arr.length; i++) {
        i > 0 ? leftSum += arr[i - 1] : leftSum = 0
        rightSum -= arr[i]
        if (rightSum === leftSum) return i 
    }
    return -1
}

function towerBuilder(nFloors) {
    // make our building blocks
    const tower = [];
    
    for (let i = 0; i < nFloors; i++ ) {
      //define blueprint for each layer
      const block = `*`.repeat(i * 2 + 1),
            buffer = " ".repeat(nFloors - i - 1)
      
      //build
      tower.push(buffer+block+buffer)
    }
    
    return tower
  
  }

//https://www.npmjs.com/package/react-icons

//https://nerdcave.com/tailwind-cheat-sheet