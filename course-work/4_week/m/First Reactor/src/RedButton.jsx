import { useState } from "react"

function RedButton(props) {

  const changeColor = () => {
    setColor("Red")
  }

  const [color, setColor] = useState("Blue")

  return (
    <div>Button
        <button
          onClick={changeColor}>
          {props.message}
        </button>
        <button
          onClick={() => alert("Seriously do it")}>
          {props.anything}
        </button>

        <h4> My favorite color is {color}</h4>
    </div>
  )
}

`const [variable, variableChangeFunction] = useState(<initialValue>)
         ^               ^                           ^
         destructured array                    Can be anything

where ‘variable’ begins at <initialValue>

and can only be updated by invoking its ‘setter function’:

variableChangeFunction(<newValue>)`

export default RedButton