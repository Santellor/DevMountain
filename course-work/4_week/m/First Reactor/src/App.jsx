// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import RedButton from './RedButton.jsx'
import Counter from './Counter.jsx'

const name = 'Jacob'
let game = {
  title: `Baba is You`,
  mainChar: `Baba`
}

const baba = (you) => {
  you = `baba`
  return you
}

function App() {
  
  return (
  //fragment
  <> 
    <div>
      <h1> Hello, React</h1>
      <p>My name is {baba(`haha`)}</p>
      <p>I want to play {game.title}</p>
      <RedButton message={game.mainChar} anything={name}/>
      <Counter initialValue={8484}/>
    </div>
  </>
)
}

export default App
