import './style.css';
import getRandomWord from './src/randomWord.js'
import setSharkImage from './src/sharkImage.js'
import setupGuesses from './src/guess.js'
import {setupWord, isLetterInWord, revealLetterInWord} from './src/word.js'

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  // our number of incorrect guesses
  let numWrong = 0;

  // our random word from a given list, pulling from randomWord.js
  let word = getRandomWord();

  // our tally for victory
  let victory = 0
  
  // sets the background image to the default
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  
  // Creates the correct amount of boxes
  setupWord(document.querySelector(`#word-container`),word )
  
  // Handles when a letter box is clicked, using the letter of the box clicked
  const handleGuess = (guessEvent, letter) => {

    // reveals correct letters or adds to the wrong guess count
    if (isLetterInWord(letter)) {
      revealLetterInWord(letter)
    } else {
      numWrong++
      setSharkImage(document.querySelector('#shark-img'), numWrong)
    }
  
    // disables a guessed letter
    const button = guessEvent.target
    button.setAttribute('disabled', true)
    
    // calculates victory by adding up the number of empty boxes. Resets victory each time.
    victory = 0
    document.querySelectorAll(`.letter-box`).forEach((box) => {
      if (box.innerText !== ``) {
        victory ++
      }
      if (victory === word.length) {
        document.querySelector(`#game-status`).innerText ="You Win :) "
      }
      if (numWrong > 4) {
        document.querySelector(`#game-status`).innerText ="You Lose :( "
        document.querySelectorAll(`button`).forEach((btn) => {
        btn.setAttribute('disabled', true)
        })
        
      }
    })


  };
  
  setupGuesses(document.querySelector('#letter-buttons'), handleGuess);
  
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
