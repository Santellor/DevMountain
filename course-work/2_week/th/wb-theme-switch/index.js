console.log(`sup, planet`)
const counter = document.querySelector(`#counter`)

let count = 0

const increase = () => {
    count ++
    counter.innerText = count 
}
const decrease = () => {
    count -= 1
    counter.innerText = count
}
const reset = () => {
    count = 0
    counter.innerHTML = `<mark>${count}</mark>`
}

const decreaseBtn = document.querySelector(`#decreaseBtn`)
const resetBtn = document.querySelector(`#resetBtn`)
const increaseBtn = document.querySelector(`#increaseBtn`)

increaseBtn.addEventListener(`click`, increase)
resetBtn.addEventListener(`click`, reset)
decreaseBtn.addEventListener(`click`, decrease)

const selectTheme = (theme) => {
document.querySelector(`body`).className = theme 
document.querySelector(`main`).className = theme 
    for (let i = 0; i < document.querySelectorAll(`button`).length; i++) {
        document.querySelectorAll(`button`)[i].className = theme 
    }
}

const faceButt = document.querySelector(`#facebook`)
const twitButt = document.querySelector(`#twitter`)
const devButt = document.querySelector(`#devmountain`)
const defButt = document.querySelector(`#default`)

faceButt.addEventListener(`click`, () => selectTheme(`facebook`))
twitButt.addEventListener(`click`, () => selectTheme(`twitter`))
devButt.addEventListener(`click`, () => selectTheme(`devmountain`))
defButt.addEventListener(`click`, () => selectTheme(`default`))