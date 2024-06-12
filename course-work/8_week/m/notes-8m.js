const truncateDuplicates1 = (string) => {
    for(let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) 
            {string = string.replace(string[i],'')
             i--   
        }
    }
    return string
}

const truncateDuplicates = (string) => {
    const chars = string.split("");
    return chars.reduce((a,c) => {
        if (c !== a[a.length - 1]) {
            a.push(c)
            return a
        } else {
            return a
        }
        
    }, []).join("")
}

const truncateDuplicates2 = (string) => {
    const chars = string.split(``);
    return chars.reduce((a,c) => a.slice(-1) === c ? a : a + c, ``)
}

console.log(truncateDuplicates('cat'))
console.log(truncateDuplicates('hello'))
console.log(truncateDuplicates(''))
console.log(truncateDuplicates('Saama'))
console.log(truncateDuplicates('SSSamm'))
console.log(truncateDuplicates('Hello Tommy'))

const netZero = (arr) => {
    let removeDuplicates
}

//Stacks are like pancakes - eat the last one placed first 
    //LILO last in, last out

//Queues are like a waterfall - that has been in the river longer water falls first
    //LIFO last in, first out

    let boy = new Array
