import axios from 'axios';

// PART 1: Show Dog Photo

function showDogPhoto(evt) {
  // TODO: get a random photo from the Dog API and show it in the #dog-image div

  axios.get('https://dog.ceo/api/breeds/image/random')
  .then((res) => {
      console.log(res.data.message)
      const dogPic = res.data.message
      document.querySelector('#dog-image').innerHTML = `<img src=${dogPic}>`
  });
}

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);

// PART 2: Show Weather

async function showWeather(evt) {
  const zipcode = document.querySelector('#zipcode-field').value;
  const link = `/weather.txt?zipcode=${zipcode}`
  const res = await axios.get(link)
  document.querySelector('#weather-info').innerText = res.data


  // TODO: request weather with that URL and show the forecast in #weather-info
}

document.querySelector('#weather-button').addEventListener('click', showWeather);

// PART 3: Order Cookies

// TODO: Need to preventDefault here, because we're listening for a submit event!
async function orderCookies(evt) {
  evt.preventDefault()

  // TODO: show the result message after your form
  let qty = document.querySelector('#qty-field').value
  let cookieType = document.querySelector('#cookie-type-field').value
  const res = await axios.post(
    'order-cookies.json',
    {cookieType: cookieType, qty: qty}
  )

  const whereIShowTheOrder = document.querySelector('#order-status')
  whereIShowTheOrder.innerText = res.data.message
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

  if (res.data.resultCode === `ERROR`) {
    whereIShowTheOrder.classList.add('order-error')
  } else {
    whereIShowTheOrder.classList.remove('order-error')
  }


}
document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

async function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`

const formData = {'term': `${searchTerm}`};
const queryString = new URLSearchParams(formData).toString();
const url = `https://itunes.apple.com/search?${queryString}`;

const res = await axios.get(url)
  console.log(res.data)
  let artistInfo = "";
  res.data.results.forEach((result) => {
    artistInfo += `<li>Artist: ${result.artistName} Song: ${result.trackName}</li>`
  })
  document.querySelector('#itunes-results').innerHTML = artistInfo
}

document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
