let word;

function setupWord(element, initWord) {
    word = initWord

    word.split(``).forEach(() => element.insertAdjacentHTML(`beforeend`, `<div class="letter-box"></div>`));
}

function isLetterInWord(letter) {
    word = word
    return word.includes(letter);
}

function revealLetterInWord(letter) {
   let letterBoxes = document.querySelectorAll(`.letter-box`)

    word.split(``).forEach((wordLetter, i) => {
        if (letter === wordLetter) {    
        letterBoxes[i].innerHTML = wordLetter 
        }
    })

}

export {setupWord, isLetterInWord, revealLetterInWord}
