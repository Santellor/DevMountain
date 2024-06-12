// Player is the current value we are placing into the squares
let player = `O`

// Creates a variable of the on-site player tracker
let playerTracker = document.querySelector(`#current-player`)

// Our Function `Play` adds values to the squares
const play = (evt) => {
    player = (player === `X`) ? `O` : `X`
    playerTracker.innerText = player
    console.log(player)
    evt.target.innerText = player
    calculateWinner()
}   

//gives squares event listeners
const squares = document.querySelectorAll(`.square`)
for (const square of squares) {
    square.addEventListener('click', play)
}

//make a function called winner 
function calculateWinner() {
    const lines = [
      // Horizontal lines
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal lines
      [0, 4, 8],
      [2, 4, 6],
    ];
  for (const line of lines){
    // obtain the index of winning combinations
    let squareA = line[0]
    let squareB = line[1]
    let squareC = line[2]

    // populate the squares with actual values
    squareAText = squares[squareA].innerText 
    squareBText = squares[squareB].innerText 
    squareCText = squares[squareC].innerText
    
    // Calculate if there is a winner
    if ((squareBText !== ``) && (squareAText === squareBText) && (squareBText === squareCText)) {
        alert(`Winner`) 
    } else if (isBoardFull()) {
        alert(`Cat's game`)
    }
}
// console.log(squares)

}

function isBoardFull() {
    for (const square of squares) {
      if (square.innerText === '') {
        return false;
      }
    }
    return true;
  }
