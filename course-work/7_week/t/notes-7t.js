const stringInString = (str1, str2) => { str1.split('').forEach((el) => {
    str2 = str2.replace(el, ``)
})
return str2.length === 0
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 10, -50, 49, Infinity]
const evenIndices = (arr) => {
    let indices = []
    arr.forEach((el, i) => {if(el % 2 === 0) indices.push(i)})
    return indices
}

console.log(evenIndices(array))

function characterCount (str) {
    const res = {};
    for (char of str) {
        res[char]? res[char]++ : res[char] = 1;
    }
    return res;
}

console.log(characterCount('kitty'))

// RUNTIME BABY
    //measuring runtime
    //common runtimes
        //O (1)
        //O (n)
        //O (n^2)
        //O log(n)

