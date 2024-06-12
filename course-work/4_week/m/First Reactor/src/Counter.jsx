import { useState } from "react"

function Counter(props) {

  const increase = () => {
    setCount(count + 1)
  }

  const [count, setCount] = useState(props.initialValue)

  return (
    <div>Counter
        <button
          onClick={increase}>
          Up the number
        </button>

        <h2> {count}</h2>
    </div>
  )
}

export default Counter