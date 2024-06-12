import playerData from "./playerData";
import { useState } from "react";

function BaseballCard(props) {

  const [showPicture, cardSwitcher] = useState(true)

  const toggleCard = () => {
    cardSwitcher(!showPicture)
  }

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{props.name}</h2>
        <img src={props.imgUrl}/>
      </div>
    )}
    else {
      const statsDisplay = Object.entries(props.stats).map((element) => 
          <p key={element[0]}>
            {element[0]}: {element[1]}
          </p>
      )
    return (
      <div className="card" onClick={toggleCard}>
          <h2>{props.name}</h2>
            <p>{props.team}</p>
            <p>{props.position}</p>
            <p>{statsDisplay}</p>
      </div>
    )}
}

function App() {
  const cards = playerData.map ((element)=> 
    <BaseballCard 
      name={element.name}
      team={element.team}
      position={element.position}
      stats={element.stats}
      imgUrl={element.imgUrl}
      key={element.cardId}
    />)
    
  return <>{cards}</>;
}

export default App;
