const animalData = require('./animal-data.json');


class Animal {
    
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
        this.greeting = "sup"
        this.food = "kibbles"
    }

    greet(){
        console.log(`${this.greeting}, human, I'm ${this.name} the ${this.species}`)
    }

    feed(){
        this.hunger -= 20
        console.log(`${this.name} ate approximately 20 ${this.food}`)
    }
    pet(emote){
        emote === undefined ? emote = 'blinks' : emote = emote
        console.log(`*${emote}* ${this.name} is happy and wants more pets`)
    }
}

class Cat extends Animal{
    constructor(name, color, hunger = 50) {
       super(name,`cat`,color,hunger) // host data expectations
       this.food = `fish`
       this.greeting = `meow`
    }

    pet(){
        console.log(`${this.name} might bite you, but they are tolerating pets for now`)
    }
  
    
}
class Dog extends Animal{
    constructor(name, color, hunger = 50) {
       super(name,`dog`, color, hunger)
       this.food = `premium kibbles`
       this.greeting = `woof`
    }

    pet(){
        super.pet(`wags tail excitedly`)
    }

}

class AnimalShelter {
    constructor() {
        this.animals = []
    }
    
    addAnimal(animal){
        this.animals.push(animal)
    }

    adopt(animal){
        this.animals = this.animals.filter((el) => el !== animal)
    }

    getAnimalsBySpecies(species){
        return this.animals.filter((el) => el.species === species)
    }
}

const shelter = new AnimalShelter

animalData.forEach((el) => {
    let animal;
    switch (el.species) {
        case `dog` : 
            animal = new Dog(el.name, el.color, el.hunger)
            break
        case `cat` : 
            animal = new Cat(el.name, el.color, el.hunger)
            break
        default : animal = new Animal(el.name, el.species, el.color, el.hunger)
    }
    shelter.addAnimal(animal)
});

// shelter.animals.forEach((el) => {
//     el.greet()
//     el.feed()
//     el.pet()
// })



const sunshine = new Dog(`Sunshine`, `blonde`)
// sunshine.greet()
// sunshine.feed()
// sunshine.pet()
console.log(sunshine)
// const gattina = new Cat(`gattina`, `stripey grey`)
// gattina.greet()
// gattina.feed()
// gattina.pet()
// console.log(gattina)