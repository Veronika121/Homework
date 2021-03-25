'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populates the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Try and avoid using global variables. Instead, use function parameters and 
return values to pass data back and forth.
------------------------------------------------------------------------------*/
function fetchData(url) {
  return fetch(url);
}

function fetchAndPopulatePokemons(/* TODO parameter(s) go here */) {
  // TODO complete this function
}

function fetchImage(/* TODO parameter(s) go here */) {
  // TODO complete this function
}

async function main() {
  try {
    const response = await fetchData('https://pokeapi.co/api/v2/');
    if (response.ok) {
      const data = response.json();
      console.log('data:');
      console.log(data);
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', main);
