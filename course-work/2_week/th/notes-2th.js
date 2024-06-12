`please remember that reverse() exists next time`

//JS indexes should go to the back

//console
    //console.error( theres an error )
    //console.warn( theres a warning)
    //console.trace( traces the interactions before this log)
    //console.timestamp(provides a timestamp for runtime)
    //console.dir(interactive list of properties)

//window
    // window.location.href will give the current URL
    // window is self-explanatory

//The Dom is a webpage represented as an object - a collection of keys and values. 

    // html -> parent
    // head / body -> children, siblings to each other, and parents to what is below them
    // title / h1 & h2 - child no siblings, 2 siblings
    
    //each HTML element is a NODES
        // some text and attributes are also NODES

    document.querySelector()
        //Takes a string in the same manner as CSS, but only the first one it finds
        //Hence the crazy level of ids

const myLi = document.querySelector(`li`)
const allLis = document.querySelectorAll(`li`)

`IF YOU ARE LOOKING FOR AN ID, USE THE #`
`IF YOU ARE LOOKING FOR A CLASS, USE THE .`

//most CSS selectors work
const selectorCSS = document.querySelectorAll(`.steps li`)

// just searches by ID
document.getElementById(`idName`)

// <p id=myPTag> words are hard </p>
    //id = key // tag = value
    //key == property == attribute

`SEARCH MDN FOR NODE AND ELEMENT`

//.innerText() selects the text
//.innerHTML() selects the HTML
//. += concat what exists and add to it

//Dumb and Slow
    //.getAttribute()
    //.setAttribute()

//So Fast
    //.`attribute`
    //.`attribute` = 

//element.className
    //shows class

//element.classList
    //shows list of classes

//element.style
    // element.style.borderRadius
        // ^^^note the camel case^^^ 
    // element.style.color
    // element.style. whatever you need
    
`I am so tired I might just nap in my car for lunch`

//.parentNode
    //returns the parent node

//.appendChild()
    //places an element into the dom as the last child of a node

//.createElement()
    //I WoNdEr WhAt ThIs DoEs

//.value
    //returns the value within a user submission in a form
    // input.value = `` clears the submission

`EVENTS and HANDLERS`
//Event
    //Click, Keypress, other programs, OS events (dark mode, light mode)
    //Moving the mouse

//click
//dblclick
//mouseover


//submit

//change 

//.addEventListener()
    //arg1 = eventType()
    //arg2 = callback()
    //when eventType(), then callback

//event
    //often shortened to e
    //used within the callback of the eventListener

//event bubble
    //nested events
    // cancel the stuff with stopPropagation()

//Forms always attempt to refresh the page on submission
    // don't like that
    // we don't want that
    // preventDefault() overrides HTML defaults

