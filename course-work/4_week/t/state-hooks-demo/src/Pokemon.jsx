import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

function Pokemon(props) {

//using states

    //count changes we SET it to change,
        //count starts at 0
    const [count, setCount] = useState(0)

    //pokemon changes when we SET it to change, 
        //starts as an array with an object to display loading for 1 second
    const [pokemon, setPokemon] = useState([{name:`loading for 1 second`}])
    

//making our list of pokemon

    //takes pokemon (starts with just one object) and turns it into a list item
    const pokemonList = pokemon.map(p => <li key={p.name}>{p.name}</li>)
    
    //takes pokeapi info and SETS the pokemon list to the first 10 results after 1 second
    const getPokemon = async (count) => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${props.num+count}`)  // the count here allows the button to add more
        .then((res) => {
            //setTimeout (() => {what}, how long)
            setTimeout(() => 
                {setPokemon(res.data.results)},
                1000)
            })
        }

// Updating with useEffect

    //this SETS count to be one higher each time 
    const showOneMorePokemon = () => {
        setCount(count + 1)
        console.log(`I Hit the button `)
    }
    
    //this calls our pokemon list filler, getPokemon, and adds the count to the number to fill our list with
        // the dependency array contains count, so this only fires when count changes
        // the console will show when a new pokemon is added 
    useEffect(() => {
        getPokemon(count)
        console.log(`pokemon number ${10 + count} will be added in 1 second`)
    }, [count])

    return (
            <div>
            <h1>Pokemon</h1>
                <button onClick={showOneMorePokemon}>add a pokemon</button>
                    <ol>
                    {pokemonList}
                    </ol>
            </div>
        )
}

export default Pokemon