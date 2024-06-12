function generateHashtag (str) {
  
    const upperArr =[];
    
    str.split(` `).forEach((el) => {
      upperArr.push(el.slice(0,1).toUpperCase() + el.slice(1))
    })
    
    const hashtag = `#`+upperArr.join(``)
    if (hashtag.length === 1) {
      return false
    }
    if (hashtag.length > 140) {
      return false
    } else { 
      return hashtag 
    }
  }

function findEvenIndex(arr){

//holy runtime
for (let i = 0; i < arr.length; i++) {
    
    let leftSum = arr.slice(0, i).reduce((a,c) => a + c , 0)
    let rightSum = arr.slice(i + 1).reduce((a,c) => a + c , 0)
    
    if (rightSum === leftSum) return i 
}
return -1
}

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

//still some wild work left to be done - this solution uses the same reduce again as sum
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));