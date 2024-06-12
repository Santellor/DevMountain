import setupCounter from './src/counter.js';
import './styles.css';
console.log(`Buongiorno, mondo`)
console.log(`Buonasera, mondo`)


document.querySelector('#app').innerHTML = `
  <h1>Counter App</h1>

  <p>Click the button to increase the counter.</p>

  <div id="counter"></div>
`;

setupCounter(document.querySelector('#counter'));