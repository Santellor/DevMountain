import express from 'express';
import nunjucks from 'nunjucks';
import morgan from 'morgan';
import session from 'express-session';
import users from './users.json' assert { type: 'json' };
import stuffedAnimalData from './stuffed-animal-data.json' assert { type: 'json' };

const app = express();
const port = '8000';

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(session({ 
  secret: 'literallyanythingIcouldpossiblywant', 
  saveUninitialized: true, 
  resave: false }));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

function getAnimalDetails(animalId) {
  return stuffedAnimalData[animalId];
}

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/all-animals', (req, res) => {
  res.render('all-animals.html.njk', { animals: Object.values(stuffedAnimalData) });
});


// we add the parameter THAT WAS DEFINED IN ALL ANIMALS using href
//<a class="btn btn-primary" href="/animal-details/{{ animal.animal_id }}">Details</a>
                                                       ///
                          // This cheeky bugger is being saved in a query string

                          // HERE   
app.get('/animal-details/:animalId', (req, res) => {

  // we define a variable as the animal details of the parameter
  const animalObj = getAnimalDetails(req.params.animalId)

  // now we see the animalid parameter inserted as the animal value on the HTML side
    // animal in HTML is equal to the stuffed animal of the animal id
  res.render('animal-details.html.njk', { animal: animalObj });
});

app.get("/add-to-cart/:animalId", (req,res) => {
  //create a cart if it doesn't exist
  console.log( `line 55: begin add to cart`)
  req.session.cart === undefined ? req.session.cart = {} : console.log(`line 56: cart exists`) 
  
  // make a variable to name the object inserted into our cart
  let animalName = req.params.animalId

  // declare an empty object for use in the if statement
  let animalObj = {}

  // either create a shallow copy of a new object if it doesn't exist, or update the count if it does
  if (!req.session.cart[animalName]) {
    Object.assign(animalObj, getAnimalDetails(req.params.animalId))
    console.log(`line 67: we made a new animalObj: `,animalObj)
  } else {
    animalObj = req.session.cart[animalName]
  }

  // Create an entry in our cart, using a shallow copy the first time so we don't alter our imported JSON
  req.session.cart[animalName] = animalObj

    // if that object does have a count, increase it. if not, set it to 1.
  req.session.cart[animalName].count !== undefined ? 
    req.session.cart[animalName].count ++ : 
    req.session.cart[animalName].count = 1

  console.log("Line 84: final cart", req.session.cart)

  res.redirect('/cart')
  });


app.get('/cart', (req, res) => {
  
  let i = 0
  console.log(`cart check`, req.session.cart)
  for (let product in req.session.cart) {
    console.log(`line 95: `,product, i)
    req.session.cart[product].totalPrice = req.session.cart[product].price * req.session.cart[product].count
    i++
  }
  let j = 0
  let cartTotal = 0
  for (let product in req.session.cart) {
    console.log(`line 101: `,product, j)
    cartTotal += req.session.cart[product].totalPrice 
    j++
  }
  console.log(req.session.cart)
  let user 
  req.session.email ? user = `${req.session.email}, we saved your cart` : user = `Guest`
  
  res.render('cart.html.njk', { cart: req.session.cart, cartTotal: cartTotal, user: user });
});

app.get('/checkout', (req, res) => {
  // Empty the cart.
  req.session.cart = {};
  console.log(req.session.cart)
  res.redirect('/all-animals');
});

app.get('/login', (req, res) => {
  req.session.email ? (res.render('loginwarn.html.njk', {prompt: "You are already logged in"})) :
  res.render('login.html.njk');
});

app.post('/login', (req, res) => {
  const sess = req.session;
  sess.email = req.body.email; // add the user's email to the session
  res.redirect('/cart');
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}...`);
});
