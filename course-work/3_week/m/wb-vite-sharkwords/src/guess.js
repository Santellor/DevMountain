const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  //splits alphabet, with a value of the alphabet, into an array
  alphabet.split('').forEach((letter) => {
    //loops the creation of buttons 
    const btn = document.createElement('button');
      //the inner text of the buttons is the letter
    btn.innerText = letter;
      // its adding event listeners for clicks and using them to push the letter as a guess with a callback 
    btn.addEventListener('click', (e) => handleGuess(e, letter));
      // kills a button after a guess
    element.append(btn);
  });
}

export default setupGuesses;
