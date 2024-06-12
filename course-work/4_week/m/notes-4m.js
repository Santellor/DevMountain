function digitalRoot(n) {
    if(n < 10){ 
      return n; // If only a single digit remains, return that digit
    }
    const lastNum = n % 10;  // Get the last digit
    const remainingNums = Math.floor(n / 10); // Get remaining numbers, not including least significant digit
    return digitalRoot(lastNum + digitalRoot(remainingNums)); // Add the last digit to the sum of the remaining summed digits
  }



function myDigitalRoot(n) {
    while (n >= 10) {
        let numStringArr = String(n).split(``)
        
        let numArr = []
        
        numStringArr.forEach((element) => {
            numArr.push(Number(element))
        })

        if (numArr.length > 1) {
        n = numArr.reduce((acc, element) =>  acc + element )
        console.log(n)
        }
    }
return n
}

//Koa did what I was trying to do
function digitalRoot(n) {
    let res = n
    while (res >= 10) {
      res = res.toString().split('').map((elem) => Number(elem)).reduce((cur, max) => max += cur)
    }
    return res
  }