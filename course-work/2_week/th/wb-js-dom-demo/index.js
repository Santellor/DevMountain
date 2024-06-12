console.log("Hello world!")
const myLi = document.querySelector(`li`)
const allLis = document.querySelectorAll(`li`)

const langs = document.querySelector(`#languages`)

const form = document.querySelector(`form`)
const input = document.querySelector(`#input1`)
const dmIMG = document.querySelector(`#dmImg`)
const butIWantTo = document.querySelector(`#btn`)
const sportsList = document.querySelector(`.sports`)
butIWantTo.addEventListener(`click`, () => {
    alert("The boys are on their way")
})


form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    console.log(e)
    sportsList.innerHTML += `<li>${input.value}</li>`
    input.value = ``
})


const sport4 = document.querySelector(`#sport4`)
sportsList.addEventListener("click", () => {alert(`papa`)
})
sport4.addEventListener("click", () => {alert(`bebe`)
})




