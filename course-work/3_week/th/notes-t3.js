// API = Application Programming Interface
    // A way of getting data from the Internet

//JSON (JavaScript Object Notation) 
    //most common format for sending/receiving data 
    //JSON is a string! (All web responses must be strings.)
    //JSON provides a standard format to communicate regardless of language

    // just like other imports
// assert {type: 'json'}  for LOCAL imports
import practice from './practice.json' assert {type: 'json'}

// JSON is object work

for ( let i = 0; i < practice.menu.popup.menuitem.length; i++) {
    console.log(practice.menu.popup.menuitem[i])
}

//pulls each nested object from an array

// APIs 
    //usually only based on retrieval
    // not always free
        // PokeAPI is designed for playing with API's
        // https://pokeapi.co/docs/v2
        // query strings
        `?key=value`

    //most follow REST
        // representational 
        // state
        // transfer
            // transfers a representation of the state of the database
        // a request or response is independent
        // no info can be saved between req

    // AJAX
        // Asynchronous JS and XML
        // React depends on it
        // axios implements it
    //

    import axios from 'axios';

axios.get('/some-url')

  .then((response) => {

    document.querySelector('#my-div').innerText = response.data;
  });

  // front end and server are two separate ordinateurs
    // front makes reqs to a server, works with responses
    // back works with requests, makes responses

    // .then ( if successful)
    // .catch (if error)

    // await is then but without a wrap

// this might be the best way to work with CSS
    `  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    if (res.data.resultCode === 'ERROR') {
      whereIShowTheOrder.classList.add('order-error')
    } else {
      whereIShowTheOrder.classList.remove('order-error')
    }`

// in CSS file
`
.order-error {
    /* use this if an ERROR code was returned */
    color: red;
}
`

