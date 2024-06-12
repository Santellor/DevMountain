// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return (x / y) 
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  let average = (x+y)/2
    return average
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
function approximatelyEqual(x, y) {
  if (Math.abs(x) - Math.abs(y) < 0.001) {
    return true
  } else {
    return false
  }
}
// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'
function fullName(firstName, lastName) {
  let name1 = firstName+` `+lastName
  return name1
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  let reportAct = person+` was drinking `+beverage+` at `+location+`.`
  return reportAct
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
function censorVowels(string) {
  let arrayToString = string.split(``)
  for(let i = 0; i < string.length; i++) {
    if (arrayToString[i] === `a`) {
      arrayToString[i] = `*`
    }
    if (arrayToString[i] === `e`) {
      arrayToString[i] = `*`
    }
    if (arrayToString[i] === `i`) {
      arrayToString[i] = `*`
    }
    if (arrayToString[i] === `o`) {
      arrayToString[i] = `*`
    }
    if (arrayToString[i] === `u`) {
      arrayToString[i] = `*`
    } 
  }
  arrayToString = arrayToString.join('')
  return arrayToString
}

// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'
function stickyCase(string) {
  let ArrayToString = string.split(``)
  for(let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      ArrayToString[i] = ArrayToString[i].toUpperCase()
    }
  }
  ArrayToString = ArrayToString.join('')
  return ArrayToString
}

// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
//   leetspeak('javascript');
//   => 'j4v45cr1p7'
function leetspeak(string) {
  let arrayToString = string.split(``)
  for(let i = 0; i < string.length; i++) {
    if (arrayToString[i] === `a`) {
      arrayToString[i] = `4`
    }
    if (arrayToString[i] === `e`) {
      arrayToString[i] = `3`
    }
    if (arrayToString[i] === `i`) {
      arrayToString[i] = `1`
    }
    if (arrayToString[i] === `o`) {
      arrayToString[i] = `0`
    }
    if (arrayToString[i] === `s`) {
      arrayToString[i] = `5`
    } 
    if (arrayToString[i] === `t`) {
      arrayToString[i] = `7`
    } 
  }
  arrayToString = arrayToString.join('')
  return arrayToString
}

export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
};
