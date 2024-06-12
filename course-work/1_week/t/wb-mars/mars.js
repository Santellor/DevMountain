// Intro
alert("Warning, the planet Tatooine is chasing your starship!")
alert("We gotta go!")

//Act 1 - The Decision
const username = prompt("What's your name again, captain?","Han Solo")
alert("Okay, "+username+`, We can either boost the engines, or fight the planet with our missiles.`)
let fatefulChoice = prompt(`Press "B" to boost, or "F" to fight, but our chances aren't good`, `Never Tell Me the Odds`)
fatefulChoice = fatefulChoice.toUpperCase()
if(fatefulChoice === "B") {
        alert("Turns out the planet wasn't chasing you at all (they don't do that), and now you are rocketing toward the sun at lightspeed")
}   else if(fatefulChoice === "F"){
        alert("Holy toledo, you blew up the whole planet, and your ship is in danger of being swallowed by the blast")
}   else {
        alert(`Whoa, partner, a ship needs a captain with decisive orders. While you ignored the options, your ship drifted toward a deadly baby space walrus.`)
}
    
//Act 2 - The Consequences
alert("It's time to jump to hyperspace!")
let distanceInParsecs = prompt("How many parsecs should we jump?","11.99")
distanceInParsecs = Number(distanceInParsecs)
if(distanceInParsecs < 12) {
        alert(`Whoa, there, Han Solo. that's the shortest route of the Kessel Run`)
}   else {alert("That should be far enough to avoid immediate death")
}

//Act 3 - The Battle of the Ages
alert("you pulled of the jump wtihout a hitch, but now there's a GIGANTIC space walrus")
const champion = prompt(`Your only hope is to summon a space warrior of your own. What are you summoning?`,"a wookie")
let champName = prompt(`what is the space warrior's name?`, 'Chewbacca') 
let grammarPolice = champName[0]
grammarPolice = grammarPolice.toUpperCase()
let letterPolice = champName.slice(1)
letterPolice = letterPolice.toLowerCase()
champName = grammarPolice + letterPolice
alert(`Ah, yes, you chose `+champName+", "+champion+"... A fine choice")

//Act 4 - Walrusbone Fleet
alert("You stand back and watch the cataclysm")
alert(`"Wham", you see `+champName+" finish off the behemoth. Luckily, the beast's bones are made of perfectly intact spaceships")
tastefulShip = prompt(`You see a few options:
A) A star destroyer
B) The Millenium Falcon
C) A Plank with a rocket strapped to it`, "B")

if(tastefulShip === "A") {
        alert("The Empire is in trouble, now!")
}   else if(tastefulShip === "B"){
        alert("Never tell me the odds, right?")
}   else if(tastefulShip === "C"){
        alert("You sure are putting a lot of trust in this.")
}   else {
    alert(`Sticking to your old ship. works for me, I guess`)
}
let trustySteed
if(tastefulShip === "A") {
        trustySteed = 'Space Sleigh'
}   else if(tastefulShip === "B"){
        trustySteed = 'Millenium Falcon'
}   else if(tastefulShip === "C"){
        trustySteed = 'Trusty Plank'
}   else {
        trustySteed = 'Classic Rocket'
}

//Act 5 - The Return
alert(`So, `+username+` and `+champName+`, you decide to burn back home on the `+trustySteed)

let timer = 5
while (timer > 0) {
    alert(`${timer}...`)
    timer -- 
}
alert("Back to Tatooine!")