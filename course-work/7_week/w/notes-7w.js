// const arr1 = [ 1, 2, 3]
// const arr2 = [ 3, 4, 5]

// function uniqueArray(arr1, arr2) {
//   const set = new Set(arr1.concat(arr2));
//   return Array.from(set);
// }

// console.log(uniqueArray(arr1,arr2))


const runnerUpNum = (arr, num) => {
    let bestFit = arr.reduce((a, c) => c > a && num > c ? c : a, Math.min(...arr))
    return bestFit === Math.min(...arr) ? 'No Match' : bestFit
  }
  
  console.log(runnerUpNum([10,-20,30,-40,-10], -50))
  