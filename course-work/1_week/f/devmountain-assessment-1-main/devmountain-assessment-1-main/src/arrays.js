// Given an array of numbers, return all the numbers that are greater than ten.
// Ex.:
//   greaterThanTen([1, 2, 3, 11, 12, 13]);
//   => [11, 12, 13]
function greaterThanTen(numbers) {
  const highNums = []

  for ( let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10 ) {  
      highNums.push(numbers[i])
    }
  }
  return highNums
}


// Given an array of strings, return all words that start with 'b' or 'B'.
// Ex.:
//   bWords(['banana', 'orange', 'apple', 'Bonobo', 'kiwi', 'pear']);
//   => ['banana', 'Bonobo]
function bWords(words) {
  const bBegin = []

  for ( let i = 0; i< words.length; i++) {
    if (words[i].startsWith( `B`)) {
      bBegin.push(words[i])
    }
    if (words[i].startsWith( `b`)) {
      bBegin.push(words[i])
    }
  }
  return bBegin
}


// Add all the elements from additionalItems to the end of originalArray.
// Return the originalArray..
// Ex.:
//  extend([1, 2, 3], [4, 5, 6]);
//  => [1, 2, 3, 4, 5, 6]

function extend(originalArray, additionalItems) {
  for ( let i = 0; i < additionalItems.length; i++) {
    originalArray.push(additionalItems[i])
  }

  return originalArray
}

// Return an array of all items with the given length.
// Ex.:
//   itemsWithLength(['a', 'bbb', 'cccc', 'dddddd', 'eee'], 3);
//   => ['bbb', 'eee']
function itemsWithLength(items, length) {
  const correctLen = []
  
  for ( let i = 0; i < items.length; i++) {
    let itemLen = String(items[i])
    if (itemLen.length === length ) {  
      correctLen.push(items[i])
    }
  }
  return correctLen
}

// Return an array with every other element from the input array (start with index 0).
// Ex.:
//   everyOtherItem(['a', 'b', 'c', 'd', 'e']);
//   => ['a', 'c', 'e']
function everyOtherItem(items) {
  const skipAFew = []

  for (let i = 0; i < items.length; i++) {
    if ( i % 2 === 0 ) {
      skipAFew.push(items[i])
    }  
  }
  return skipAFew
}

// Given a list of words and a letter, return the indexes of the words that
// start with that letter. You can assume that the words and letter will always
// be lowercased.
// Ex.:
//   findWordsStartingWith(['apple', 'banana', 'kiwi', 'pear', 'bacon'], 'b');
//   => [1, 4]
function findWordsStartingWith(words, letter) {
  const letterIndex = []

  for ( let i = 0; i< words.length; i++) {
    const currentWord = String(words[i])
    if (currentWord.startsWith(letter)) {
      letterIndex.push(words.indexOf(words[i]))
    }
  }
  return letterIndex
}

// Return the `n` smallest values in the array in descending order (largest
// numbers first). Assume that `n` will always be less than the length of the
// array.
// Ex.:
//   smallestNItems([1, 30, 4, 21, 100000], 3);
//   => [21, 4, 1]
function smallestNItems(items, n) {
  function findTheSmallOnes(a, b) {
    return a - b
  }
  const newArray = items.sort(findTheSmallOnes)
  console.log (newArray)
  const snippedArray = []

  for (let i = 0; i < n; i++) {
     snippedArray.unshift(newArray[i])
  }
  return snippedArray
}

// Search for a value in the array and return its index. If the value appears
// more than once, return the index of the *FIRST* occurrence of the value. If
// the value doesn't exist in the array, return undefined.
// Ex.:
//   findIndex(['a', 'b', 'c', 'a', 'b', 'c'], 'c');
//   => 2
function findIndex(items, value) {
  if (items.indexOf(value) === -1)
  return undefined

  return items.indexOf(value)
}

// Given a start number and stop number, return a new array containing all the numbers
// between the start and stop number.
// Ex.:
//   range(1, 5);
//   => [1, 2, 3, 4, 5]
function range(start, stop) {
  const newArray = []
  let distance = 0
    if ( stop < 0) {
      distance = (Math.abs(start) - Math.abs(stop) )
    }
    if ( start < 0) {
      distance = (Math.abs(stop) + Math.abs(start) )
    } else {
      distance = (Math.abs(stop) - Math.abs(start) )
    }

  for(let i = 0; i < distance + 1; i++) {
    newArray [i] = start + i
  }
    return newArray
  
}
export {
  bWords,
  everyOtherItem,
  extend,
  findIndex,
  findWordsStartingWith,
  greaterThanTen,
  itemsWithLength,
  range,
  smallestNItems,
};
