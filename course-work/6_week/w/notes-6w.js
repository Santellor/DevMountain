function moveZeros(arr) {
    let len = arr.length;
    
    const newArr = arr.filter((el) => el !== 0 )
    
    while (len !== newArr.length) 
    {newArr.push(0)}
    
    return newArr
}

//solution???
  var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }



function humanReadable (seconds) {

let hours = Math.floor(seconds/(3600))
let minutes = Math.floor(seconds/60)-hours * 60
seconds = seconds - hours * 3600 - minutes * 60


String(hours).length < 2 ? hours = `0`+hours : null
String(minutes).length < 2 ? minutes = `0`+minutes : null
String(seconds).length < 2 ? seconds = `0`+seconds : null


return `${hours}:${minutes}:${seconds}`;
}


class Cat {
    constructor(name, species, hunger, trueName) {
        this.name = name
        this.species = species
        this.hunger = hunger
        this.trueName = trueName
    }

    feed(){
        this.hunger += 20
    }
}

const tubbo = new Cat(`Tubbo`, `CHONK`, 100, `Gingersnap`) 
const gattina = new Cat(`Gattina`, `ZOOM`, 80, `Zig-Zag`) 

console.log(tubbo)
console.log(gattina)
gattina.feed()
console.log(gattina.hunger)




