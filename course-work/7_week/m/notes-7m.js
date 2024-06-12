//whiteboarding
    //understanding of algorithms
    //less syntax, more techniques
    //how you communicate
    //how you deal with pressure
//Listen
    //listen for inputs, desired outputs, and specified edge cases
//Echo
    //return the problem
//Ask
    //Ask for resources, 
    //clarification on input types, 
        // test case
        // forseeable edge case analysis
    //clarification on return
//Pseudocode
    //if there are LOOPS 
        //ask what can I do outside of the loop
        //variable names

const sumPosNums = (arr) => {
    return arr.reduce((acc,cur) => {
        return ( +cur === cur && cur > 0 ) ? acc + cur : acc = acc 
    }, 0)
}

console.log(sumPosNums([1,true,2, 3.5, 'count',-100]))

const reverseNum = (num) => {
    return String(num ?? '').split('').reverse('').map((num) => num = Number(num))
} 
console.log(reverseNum(987654321))
console.log(reverseNum(17372))
console.log(reverseNum())