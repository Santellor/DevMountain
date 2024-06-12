import './dice.css'
import { useState } from 'react'

export default function Die(props) {

    const [diceValue, setDiceValue ] = useState(props.sides)

   const  randomRoll = (highroll) => {
      let roll = Math.ceil(Math.random() * highroll)
    return roll
   }

   const roll = () => {
    const rollValue = randomRoll(props.sides)
    setDiceValue(rollValue)
   }

    return ( 
        <button type='button' className='die' onClick={roll}>
            <i>d{props.sides}</i>
            <b>{diceValue}</b>
        </button>

    )
}
