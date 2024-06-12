import axios from 'axios';

axios.get('https://swapi.dev/api/films/5')
  .then((res) => {
      console.log(res.data)
      document.querySelector('#star-wars-movie').innerText = res.data.title
  })

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((res) => {
      console.log(res.data)
      document.querySelector('#poke-name').innerText = res.data.name
  });

const getPokemon = async () => {
    let numPok = document.querySelector('input').value
    let myList = document.querySelector('ul')
    
    // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPok}`)
    // .then((res) => {
    //   console.log(`pokeList`, res.data)
    //   let caughtPoke = res.data.results

    //   caughtPoke.forEach(element => {
    //     let newLi = document.createElement('li')
    //     newLi.innerText = element.name
    //     myList.appendChild(newLi)
    //   });
    // });
    
    
    
    
    let pokeDex = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPok}`)

      pokeDex.data.results.forEach(element => {
        let newLi = document.createElement('li')
        newLi.innerText = element.name
        myList.appendChild(newLi)

      });
    
    console.log (`pokedata`, pokeDex)
  } 

  
    
  console.log(`this will run first`)


const getdePokemon = async () => {
  let numPokemon = document.querySelector('input').value
  let myList = document.querySelector('ul')

  // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`)
  //     .then((res) => {
  //         console.log('pokeList', res.data)
  //         let pokeArray = res.data.results

  //         pokeArray.forEach((el) => {
  //             let newLi = document.createElement('li')
  //             newLi.innerText = el.name
  //             myList.appendChild(newLi)
  //         })
  //     })


  let pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${numPokemon}`)

  console.log('pokedata', pokeData)

  pokeData.data.results.forEach((el) => {
      let newLi = document.createElement('li')
      newLi.innerText = el.name
      myList.appendChild(newLi)
  })

}

document.querySelector('button').addEventListener(`click`, getPokemon)

const ordercookies = async (e) => {
e.preventDefault()

let cookieInput = document.querySelector('#cookie-type-field').value
let quantity = document.querySelector('#qty-field').value

let res = await axios.post('/order-cookies', {
  "quantity": quantity,
  "cookieType": cookieInput
  })

  console.log(`cookies`, res.data)

  document.querySelector('#order-status').innerText = res.data.message
  document.querySelector('#order-total').innerText = "Total: $" + res.data.total.toFixed(2)
}

document.querySelector('form').addEventListener(`submit`, ordercookies)

