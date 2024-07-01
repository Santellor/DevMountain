// const isAnagram = (string1, string2) => {
//     if (string1.length !== string2.length) return false
//     string1 = string1.toLowerCase()
//     string2 = string2.toLowerCase()
//     for (letter of string1) {
//         string2 = string2.replace(letter,'')
//     }
//     return  string2.length === 0
// }


// console.log(isAnagram(`Swords`, `woRds`))
// console.log(isAnagram(`Sword`, `woRds`))
// console.log(isAnagram(`bandit`, `words`))

obj1 = { a:1, b:2 }
obj2 = { b:2, a:1 } 
// console.log(Object.values(obj2))
// console.log(Object.keys(obj1).join === Object.keys(obj2).join && Object.values(obj1).join === Object.values(obj2).join)

//recursion 

const countTo10 = (num = 1, total = 0) => {
    if (num === 10) { return }
    else { 
        countTo10(num + 1) 
        return num
    }
}

// console.log(countTo10(-1))
// console.log(countTo10())

const gaussWouldBeSad = (startNum, endNum, num = startNum, total = 0) => {
    if (num === endNum) return total + endNum 
    else return gaussWouldBeSad(startNum, endNum, num + 1, total + num)
}

console.log(gaussWouldBeSad(1,100))
console.log(gaussWouldBeSad(1,10))

const arrLength = (arr) => {
    if (arr[0] === undefined) return 0
    arr.pop()
    return 1 + arrLength(arr)
    }

console.log(arrLength([-1, 0, 1, 2, 3]))
console.log(arrLength([]))
console.log(arrLength([1, 2, 3, 4 ,5]))
console.log(arrLength([]))
console.log(gaussWouldBeSad(1,99))

const logEncrypt = (string) => {
    let word1 = ''
    let word2 = ''
    string = string.replaceAll(' ','')
    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) word1 += string[i]
      else word2 += string[i]
    }
    console.log(word1)
    console.log(word2)
  }
  
  logEncrypt(`Hot Sauce`)