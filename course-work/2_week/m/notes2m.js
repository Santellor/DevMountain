// `js
// // Write a function that takes in an item and an array. Return the number of times the given item appears in the array.
// // ex: itemInArrayCount(['cat', 'dog', 'mouse', 'cat', 'fox'], 'cat') --> 2
// `
// // array to search for
// const exArray = ['cat', `Fox`, 'dog', `fox`, 'mouse', 'cat', 'fox', 1 , 1 , 1]

// function itemInArrayCount (array, keyword) {
//     // the counter
//     let count = 0

//     // checks the length of the array for the keyword, then increases the counter. 
//     for( let i = 0; i < array.length; i++ ) {
//         if (array[i] === keyword) {
//             count++
//         }
//     }
//     return count
// }
// console.log(itemInArrayCount(exArray, `fox`))
// console.log(itemInArrayCount(exArray, `1`))
// console.log(itemInArrayCount(exArray, 1))

// Objects
    // Collection of key - value pairs
        // key: value
        // property: value
    // Objects are a function that returns a key
        // object.key
        // object[keyVar]

const fruits = {
    apple: 6, 
    berry: 12,
    cherry: 8,
    tomato: 40,
    dingleberry: Infinity 
}
const vegetables = {
    asparagus: 40,
    broccoli: 6,
    carrot: 8,
    tomato: `tomato`
}

    // modify
fruits.tomato = 50
    // define
fruits.avocado = 3
    // delete
delete fruits.dingleberry

console.log(fruits[vegetables.tomato])
console.log(fruits)

for(let property in fruits){
    console.log(`${property} ${fruits[property]}`)
}
    // Spread boi
        // `...`

const fruitToday = {...fruits}
 
const delivery = [`Truck`, `Moped`, `Sedan`]

const deliveryToday = [`Plane`, ...delivery]

console.log(deliveryToday)


    // Object.entries(objectToSearch)
        // gives an array of the kv pairs
    // Object.keys(objectToSearch)
        // gives an array of the keys
    // Object.values(objectToSearch)
        //gives an array of the values

        
        // Destrcturing
        // same as sayin let tomato = vegetables.tomato
        let {tomato} = vegetables 
        console.log(tomato)
        
        // Destructuring arrays ?!?!?!?!?!?!?!?    
const {apple, cherry} = fruits 
console.log(`did this work?`)
console.log(apple)

const frutti = [
    {
      name: 'apple',
      genus: 'Malus',
      colors: ['red', 'yellow', 'green'],
    },
    {
      name: 'berry',
      genus: 'Vaccinium',
      colors: ['red', 'blue'],
    },
    {
      name: 'cherry',
      genus: 'Prunus',
      colors: ['red'],
    },
  ];

 for(let i = 0; i < frutti.length; i++){
    // console.log(fruits[i])

    for (let prop in frutti[i]){
        console.log(frutti[i][prop])
    }
 }